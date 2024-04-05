import { Routes } from '@angular/router';
import { MissionlistComponent } from './component/missionlist/missionlist.component';
import { MissiondetailsComponent } from './component/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'details/:flightNumber', component: MissiondetailsComponent },
];
