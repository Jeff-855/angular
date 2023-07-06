import { Component, Input, OnInit } from '@angular/core';
import { LoginTestService } from "src/app/services/logintest.service";
import { Testuser } from 'src/app/models/testuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {


  constructor(private loginTestService:LoginTestService,
              private router: Router) { }
  submitted = false;
  ngOnInit(): void {
  }
  @Input() testUser: Testuser = {
    id: '',
    username: '',
    password: ''
  };
    username: string='';
    password: string='';
    message: string = '';
    resp: string='';

    clicked() {
        if (this.username === 'steven' && this.password === 'pass1234') {
            this.message = '登入成功';
            this.submitted = true;
            this.router.navigate(['/add']);
        }
        else {
            this.message = '帳密錯誤';
        }
    }

    clicked1(): void {
      console.log("userName is:"+this.username)
      this.loginTestService.findbyNm(this.username).subscribe({
        next: (res1) => {
          console.log("result is :"+res1);
          this.testUser = res1
          console.log("testUser is:"+this.testUser.password)
          this.message = '登入成功';
            this.submitted = true;
            if (res1!== null){
              console.log("testUser is: ok")
              this.message = '登入成功1';
            }

        },

        error: (e) => {
          console.log("testUser is: not ok")
          this.message = '登入失敗';
          console.error(e)
        }
      });
    }

}



