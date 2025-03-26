import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { Home } from '../portfolio.constant';

@Component({
  selector: 'app-my-intro',
  templateUrl: './my-intro.component.html',
  styleUrls: ['./my-intro.component.scss']
})
export class MyIntroComponent implements OnInit {
  componentData: Home = {} as Home;

  constructor(private router: Router, private _portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.componentData = this._portfolioService.dynamicContent[this._portfolioService.currentUser].home;
  }

  openResume() {
    window.open(this.componentData.resumePath, '_blank');
  }

  routeToContact() {
    this.router.navigate(['/contact']);
  }

}
