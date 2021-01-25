import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TimeService } from '../providers/time.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  flag = false;
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];
  name = 'Ben';
  secondName = 'Ten';

  @ViewChild('userView')
  private userViewTemplate: TemplateRef<any>;

  constructor(ts: TimeService) {
    ts.doNothing('templates module');
  }

  ctx = {
    name: this.name,
    surname: this.secondName
  };

  ngOnInit(): void {
  }

  changeFlag() {
    this.flag = !this.flag;
  }

  login() {
    console.log('Login');
  }

  clickMe() {
    console.log('clickMe');
  }

  signUp() {
      console.log('Sign Up');
  }

  inspectTemplateRef() {
    console.log(this.userViewTemplate);
  }
}
