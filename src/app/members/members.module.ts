import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { CreateComponent } from './create/create.component';
import { MemberComponent } from './member/member.component';
import { UpdateComponent } from './update/update.component';
import { MembersComponent } from './members.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MemberListComponent, CreateComponent, MemberComponent, UpdateComponent, MembersComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class MembersModule { }
