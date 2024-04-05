import { Component, OnInit } from '@angular/core';
import { Spacexapi } from '../../services/spacexapi.service';
import { Mission } from '../../Mission';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, FormsModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  selectedYear: string = '';

  constructor(private missionService: Spacexapi, private router: Router) {}

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.missionService.getMissions().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  getYear(): void {
    if (this.selectedYear) {
      this.missionService
        .getMissionsByLaunchYear(this.selectedYear)
        .subscribe((missions: Mission[]) => {
          this.missions = missions;
        });
    } else {
      this.missionService.getMissions().subscribe((missions: Mission[]) => {
        this.missions = missions;
      });
    }
  }
}
