import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { CreateComponent } from './create/create.component';
import { MemberComponent } from './member/member.component';
import { UpdateComponent } from './update/update.component';
import { MembersComponent } from './members.component'

const routes: Routes = [
  {
    path:"members",
    component:MembersComponent,
    children: [
      {
        path:"",
        component:MemberListComponent
      },
      {
        path:"create",
        component:CreateComponent
      },
      {
        path:":id/update",
        component:UpdateComponent
      },
      {
        path:":id",
        component:MemberComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
