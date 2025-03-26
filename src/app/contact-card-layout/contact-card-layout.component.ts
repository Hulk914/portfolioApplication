import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Contact, Portfolio } from '../portfolio.constant';

@Component({
  selector: 'app-contact-card-layout',
  templateUrl: './contact-card-layout.component.html',
  styleUrls: ['./contact-card-layout.component.scss']
})
export class ContactCardLayoutComponent implements OnInit {
  contactDetails!: Contact;

  constructor(private _portService: PortfolioService) { }

  ngOnInit(): void {
    this.contactDetails = this._portService.getCurrentUserObj().contact;
  }

}
