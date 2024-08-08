import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    CountdownTimerComponent,
    FooterComponent,
    ContactsComponent,
    SpeakersComponent,
    CoordinatorsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'event';
}
