import { Component, OnInit } from '@angular/core';
import { Spacexapi } from '../../services/spacexapi.service';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../../Mission';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css',
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(
    private route: ActivatedRoute,
    private missionService: Spacexapi
  ) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.params['flightNumber']);
    this.missionService
      .getMissionDetails(flightNumber)
      .subscribe((mission) => (this.mission = mission));
  }
}
