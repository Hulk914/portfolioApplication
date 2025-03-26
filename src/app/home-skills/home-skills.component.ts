import { CardWrapperComponent } from '../card-wrapper/card-wrapper.component';
import { Portfolio } from '../portfolio.constant';
import { PortfolioService } from './../portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  imports: [CardWrapperComponent],
  styleUrls: ['./home-skills.component.scss'],
  standalone: true
})
export class HomeSkillsComponent implements OnInit {
  languages!: { image: string; text: string; }[];
  frameworks!: { image: string; text: string; }[];
  tools!: { image: string; text: string; }[];
  currentUserObj!: Portfolio;
  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.currentUserObj = this.portService.getCurrentUserObj();
    this.languages = this.currentUserObj.home.languages;
    this.frameworks = this.currentUserObj.home.frameworks;
    this.tools = this.currentUserObj.home.tools;
  }

}
