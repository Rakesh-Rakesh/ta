import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Desginatiion:string="Team Leader";;
Username:string="John Smith";
NoOffTeammembers:number=67;
TotalCostOfAllProjects:number=240;
PendingTasks:number=15;
UpComingProjects:number=2;
ProjectCost:number=2113507;
CurrentExpenditure:number=96788;
AvailableFunds:number=52536;

  ngOnInit(): void {
    this.Desginatiion
    this.Username;
    this.NoOffTeammembers;
    this.TotalCostOfAllProjects;
    this.PendingTasks;
    this.UpComingProjects;
    this.ProjectCost;
    this.CurrentExpenditure;
    this.AvailableFunds;
  }

}
