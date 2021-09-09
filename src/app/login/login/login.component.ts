import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginuser = {
    username: '',
    password: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}
  submitClicked() {
    if (
      this.loginuser.username == 'amita' &&
      this.loginuser.password == 'Smiler@123'
    ) {
      this.router.navigate(['home/home']);
    }
  }
}
