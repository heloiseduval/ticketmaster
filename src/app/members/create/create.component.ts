import { Component, OnInit } from '@angular/core';
import { Member } from '../../shared/models/member';
import { MemberListService } from '../../shared/services/member-list.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  public memberForm: FormGroup;
  public roleOptions: String[] = ["user", "admin"];

  constructor(
    private memberlist: MemberListService, 
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    ) { 
  }


  ngOnInit(): void {
    this.memberForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required]
    },{
      updateOn:"submit"
    });
    /* console.log(
      this.memberForm.controls.firstName.valid );
    console.log(
      this.memberForm.controls.firstName.hasError("required") );
    console.log(
      this.memberForm.controls.firstName.hasError("minlength") ); */
  }

  public onClickAdd(): void {
    if (this.memberForm.valid) {
      this.memberlist.addMember({
        id:this.memberlist.get().subscribe.length + 1,
        firstname: this.memberForm.controls.firstName.value,
        lastname: this.memberForm.controls.lastName.value,
        role: this.memberForm.controls.role.value
      }).subscribe(
          (data: any) => this.router.navigate(["members"]),
          (error: HttpErrorResponse) => console.log("Error",error.status)
      )
      
    } else {
      console.log("pas Valid");
    }
    

  }

}
