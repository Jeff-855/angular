//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: Test = {
    retryCnt: '',
    digital1: '',
    digital2: '',
    digital3: '',
    ans:''
  };
  constructor(private testService: TestService) { }
  submitted = false;
  ngOnInit(): void {
   }

  guessNum(): void {
    const data = {
      retryCnt: this.test.retryCnt,
      digital1: this.test.digital1,
      digital2: this.test.digital2,
      digital3: this.test.digital3
    };
    //var retryCnt1: any =localStorage.getItem('retryCnt1');
    var retryCnt: any =sessionStorage.getItem('retryCnt');
    var ans1: any =sessionStorage.getItem('ans1');
    console.log("b4retryCnt"+retryCnt);
    if (Number(retryCnt)>=10 || parseInt(ans1)==30 ) {
        retryCnt = null;
        ans1 = null;
        console.log("afretryCnt"+retryCnt);
    }

    if (!retryCnt){
      console.log("null retryCnt"+retryCnt);
      sessionStorage.setItem('retryCnt', String(1));
      this.test.retryCnt=1;
      data.retryCnt=1;
    }else{
      retryCnt = Number(retryCnt)+1;
      sessionStorage.setItem('retryCnt', String(retryCnt));
      this.test.retryCnt=retryCnt;
      data.retryCnt=retryCnt;

    }

    this.testService.guessNum(data)
    .subscribe({
      next: (res1) => {

        console.log(res1);
        this.test.ans = Math.floor(res1/10)+"A"+res1%10 +"B";
        this.submitted = true;
        console.log("test2:"+ this.test.ans);
        sessionStorage.setItem('ans1', String(res1));
        console.log("test2 ans1:"+ ans1);

      },

      error: (e) => console.error(e)
    });
  }

  reTry(): void {
    console.log("reTryNum");
    this.submitted = false ;
    this.test.ans = '';
    /*this.test = {
      retryCnt: '',
      digital1: '',
      digital2: '',
      digital3: '',
      ans:''
    };*/
  }

}
