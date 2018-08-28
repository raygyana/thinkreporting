import { Component, OnInit } from '@angular/core';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-mass-kill',
  templateUrl: './mass-kill.component.html',
  styleUrls: ['./mass-kill.component.css']
})
export class MassKillComponent implements OnInit {


  MASS_KILL_DESCRIPTION_REPORT = 'MASS_KILL_DESCRIPTION_REPORT';
  MASS_KILL_OUTPUT_REPORT = 'MASS_KILL_OUTPUT_REPORT';
  MASS_KILL_REPORT = 'MASS_KILL_REPORT';
  constructor() { }

  ngOnInit() {
  }

}
