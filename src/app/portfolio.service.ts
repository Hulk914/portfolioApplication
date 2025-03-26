import { Injectable } from '@angular/core';
import { portfolioData, PortfolioData } from './portfolio.constant';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  currentUser = 'ayush';

  dynamicContent: PortfolioData = portfolioData;

  getCurrentUserObj() {
    return this.dynamicContent[this.currentUser];
  }

  constructor() { }
}
