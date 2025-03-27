import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Hobbies, Hobby } from '../portfolio.constant';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbiesDataArr!: Hobby[];

  constructor(private portService: PortfolioService) { }

  ngOnInit(): void {
    this.hobbiesDataArr = this.portService.getCurrentUserObj().hobbies.hobbiesArray;
  }

}
