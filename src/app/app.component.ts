import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioApplication';
}
