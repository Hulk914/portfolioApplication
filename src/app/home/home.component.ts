import { Component, OnInit } from '@angular/core';
import { MyIntroComponent } from '../my-intro/my-intro.component';
import { HomeSkillsComponent } from '../home-skills/home-skills.component';

@Component({
  selector: 'app-home',
  imports: [MyIntroComponent, HomeSkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
