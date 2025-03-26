import { AboutProductComponent } from '../about-product/about-product.component';
import { CardWrapperComponent } from '../card-wrapper/card-wrapper.component';
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

  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.iconArray = this.portService.companyTech.fis.iconArray;
    this.detailsInfo = this.portService.companyTech.fis.aboutProd;
  }

  showSelectedCompany(event: any) {
    switch (+event.target.value) {
      case 0: {
        this.iconArray = this.portService.companyTech.fis.iconArray;
        this.detailsInfo = this.portService.companyTech.fis.aboutProd;
        break;
      }
      case 1: {
        this.iconArray = this.portService.companyTech.zycus.iconArray;
        this.detailsInfo = this.portService.companyTech.zycus.aboutProd;
        break;
      }
      case 2: {
        this.iconArray = this.portService.companyTech.infySenior.iconArray;
        this.detailsInfo = this.portService.companyTech.infySenior.aboutProd;
        break;
      }
      case 3: {
        this.iconArray = this.portService.companyTech.infySystem.iconArray;
        this.detailsInfo = this.portService.companyTech.infySystem.aboutProd;
        break;
      }
      case 4: {
        this.iconArray = this.portService.companyTech.infyTrainee.iconArray;
        this.detailsInfo = this.portService.companyTech.infyTrainee.aboutProd;
        break;
      }
      case 5: {
        this.iconArray = this.portService.companyTech.ttl.iconArray;
        this.detailsInfo = this.portService.companyTech.ttl.aboutProd;
        break;
      }
      default: {
        this.iconArray = this.portService.companyTech.fis.iconArray;
        this.detailsInfo = this.portService.companyTech.fis.aboutProd;
        break;
      }
    }
  }

}
