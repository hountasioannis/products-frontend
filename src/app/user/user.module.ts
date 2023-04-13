import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component'
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './user.service';
import { UserInsertComponent } from './user-insert/user-insert.component';


const routes: Routes = [
  {path: 'list', component: UsersListComponent},
  {path: 'insert', component:UserInsertComponent}
]

@NgModule({
  declarations: [
    UsersListComponent,
    UserInsertComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
