import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';

import { SpeakersComponent } from './components/speakers/speakers.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'coordinators', component: CoordinatorsComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'contacts', component: ContactsComponent },

  { path: '', redirectTo: '/header', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/header' }, // Wildcard route
];
