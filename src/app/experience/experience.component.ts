import { AboutProductComponent } from '../about-product/about-product.component';
import { CardWrapperComponent } from '../card-wrapper/card-wrapper.component';
import { CompanyDetails, Portfolio } from '../portfolio.constant';
import { PortfolioService } from './../portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CardWrapperComponent, AboutProductComponent],
  styleUrls: ['./experience.component.scss'],
  standalone: true
})
export class ExperienceComponent implements OnInit {

  iconArray: any[] = [];
  detailsInfo: any[] = [];
  currentUserObj!: Portfolio;
  experienceArr: CompanyDetails[] = [];
  selectedCompany!: CompanyDetails;

  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.currentUserObj = this.portService.getCurrentUserObj();
    Object.keys(this.currentUserObj.experience.companyTech).forEach((key) => {
      this.experienceArr.push(this.currentUserObj.experience.companyTech[key]);
    });
    this.selectedCompany = this.experienceArr[0];
  }

  showSelectedCompany(event: any) {
    this.selectedCompany = this.experienceArr[+event.target.value];
  }

}
