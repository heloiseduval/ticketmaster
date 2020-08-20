import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { jsonbin } from './../../../environments/jsonbin'

@Injectable({
  providedIn: 'root'
})
export class MemberListService {
  
  public memberList: Member[] = [];

  constructor(private http: HttpClient) { }

  public addMember(member : Member): Observable<any> {
    this.memberList.push(member);

    return this.http.put(jsonbin.bins.members, this.memberList, {
      headers : new HttpHeaders(jsonbin.headers)
    });
  }


  public get(): Observable<Member[]> {
    return this.http.get<Member[]>(
      jsonbin.bins.members, {headers : new HttpHeaders(jsonbin.headers)}).pipe(
        //modif cette donnée : tap
          tap((memberList: Member[]) => {
            this.memberList = memberList;
            console.log("Je suis dans tap");
          })
        //filtrer cette donnée : filter

        //effectuer une action sans rapport cette donnée: map
      );
  }

  public getMemberById(id: number):Member | null {
    return this.memberList.find(member => id === member.id)
  }

  public delete(member: Member): Member {
    this.memberList.splice(
      this.memberList.indexOf(member),
       1
    );
    return member;
  }

}
