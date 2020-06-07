import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
constructor(private fb: FormBuilder,private http: HttpClient) { }

formModel = this.fb.group({
  firstName: ['Hi', Validators.required],
  lastName: ['hi', Validators.required],
  course: [-1,Validators.min(1)],
});


register() {
  var body = {
    UserName: this.formModel.value.UserName,
    Email: this.formModel.value.Email,
    FullName: this.formModel.value.FullName,
    Password: this.formModel.value.Passwords.Password
  };
}
}




