import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginComponent,
    RegisterComponent
  ],
  exports: [AuthModalComponent]
})
export class UserModule { }
