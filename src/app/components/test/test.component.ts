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
  constructor(private testService: TestService) {console.log("testcomponent1"); }
  submitted = false;
  ngOnInit(): void {
    console.log("testcomponent11");

  }

  guessNum(): void {
    console.log("guessNum");

    const data = {
      retryCnt: this.test.retryCnt,
      digital1: this.test.digital1,
      digital2: this.test.digital2,
      digital3: this.test.digital3
    };
    //var retryCnt1: any =localStorage.getItem('retryCnt1');
    var retryCnt: any =sessionStorage.getItem('retryCnt');
    console.log("b4retryCnt"+retryCnt);
    if (Number(retryCnt)>=3){
        retryCnt = null;
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
      next: (res) => {

        console.log(res);
        this.test.ans = Math.floor(res/10)+"A"+res%10 +"B";
        this.submitted = true;
        console.log("test2:"+ this.test.ans);

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
