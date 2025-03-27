import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutArr!: string[];

  constructor(private _portServ: PortfolioService) { }

  ngOnInit(): void {
    this.aboutArr = this._portServ.getCurrentUserObj().about;
  }

}
