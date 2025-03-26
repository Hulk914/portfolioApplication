import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desktop-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss'],
  standalone: true
})
export class DesktopNavComponent implements OnInit {

  showMobNav = false;
  constructor() { }

  ngOnInit(): void {
  }

}
