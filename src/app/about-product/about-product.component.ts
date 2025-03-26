import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-product',
  imports: [CommonModule],
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

  @Input() title = 'Details';
  @Input() detailArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
