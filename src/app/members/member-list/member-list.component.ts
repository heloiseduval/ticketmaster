import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Member } from 'src/app/shared/models/member';

import { jsonbin } from './../../../environments/jsonbin'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  
  public members: Member[];
  
  constructor( 
    private route: ActivatedRoute, 
    private memberListService: MemberListService,
    private http: HttpClient
    ) {
      //this.members = this.memberListService.get();
      this.memberListService.get().subscribe(
        (memberList: Member[]) => { 
          console.log("je suis dans subscribe");
          this.members = memberList;
        },
        (error: HttpErrorResponse) => console.log("Error", error.status)
        )
      }; 
    
}


