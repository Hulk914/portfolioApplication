import { Component, OnInit } from '@angular/core';
import { ContactCardLayoutComponent } from '../contact-card-layout/contact-card-layout.component';
import { PortfolioService } from '../portfolio.service';
import { Contact } from '../portfolio.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ContactCardLayoutComponent],
  styleUrls: ['./contact.component.scss'],
  standalone: true
})
export class ContactComponent implements OnInit {
  contactDetails!: Contact;

  constructor(private _portService: PortfolioService) { }

  ngOnInit(): void {
    this.contactDetails = this._portService.getCurrentUserObj().contact;
  }

}
