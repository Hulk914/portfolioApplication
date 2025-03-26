import { Component, OnInit } from '@angular/core';
import { ContactCardLayoutComponent } from '../contact-card-layout/contact-card-layout.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ContactCardLayoutComponent],
  styleUrls: ['./contact.component.scss'],
  standalone: true
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
