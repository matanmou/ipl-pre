import { Component, OnInit, TemplateRef } from '@angular/core';
import { Team } from '../models/team';
import { ChosenTeam } from '../models/chosen-team';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TeamListComponent } from '../team-list/team-list.component';
import { delay } from 'q';

@Component({
  selector: 'app-ipl-pre',
  templateUrl: './ipl-pre.component.html',
  styleUrls: ['./ipl-pre.component.css']
})
export class IplPreComponent {
  colors:string = "#3a7e3a";
  teams: Team[] = [];
  chosenTeams: Team[] = [];
  modalRef: BsModalRef;
  try: string = "#ffffff";
  constructor(private modalService: BsModalService){
    this.teams.push({id: 1, teamName: "מכבי חיפה", lastYearStand: 2, pColor: "green", sColor: "white", chosenP: 0});
    this.teams.push({id: 2, teamName: "מכבי תל אביב", lastYearStand: 1, pColor: "yellow", sColor: "blue", chosenP: 0});
    this.teams.push({id: 3, teamName: "הפועל באר שבע", lastYearStand: 3, pColor: "red", sColor: "white", chosenP: 0});
    this.teams.push({id: 4, teamName: "מכבי נתניה", lastYearStand: 4, pColor: "yellow", sColor: "black", chosenP: 0});
    this.teams.push({id: 5, teamName: "בני יהודה", lastYearStand: 5, pColor: "orange", sColor: "black", chosenP: 0});
    this.teams.push({id: 6, teamName: "הפועל חדרה", lastYearStand: 6, pColor: "red", sColor: "white", chosenP: 0});
    this.teams.push({id: 7, teamName: "בית\"ר ירושלים", lastYearStand: 7, pColor: "yellow", sColor: "black", chosenP: 0});
    this.teams.push({id: 8, teamName: "הפועל תל אביב", lastYearStand: 8, pColor: "red", sColor: "white", chosenP: 0});
    this.teams.push({id: 9, teamName: "הפועל רעננה", lastYearStand: 9, pColor: "red", sColor: "black", chosenP: 0});
    this.teams.push({id: 10, teamName: "עירוני קרית שמונה", lastYearStand: 10, pColor: "white", sColor: "blue", chosenP: 0});
    this.teams.push({id: 11, teamName: "מ.ס. אשדוד", lastYearStand: 11, pColor: "red", sColor: "yellow", chosenP: 0});
    this.teams.push({id: 12, teamName: "הפועל חיפה", lastYearStand: 12, pColor: "red", sColor: "black", chosenP: 0});
    this.teams.push({id: 13, teamName: "סקציה נס ציונה", lastYearStand: -1, pColor: "orange", sColor: "white", chosenP: 0});
    this.teams.push({id: 14, teamName: "הפועל כפר סבא", lastYearStand: -1, pColor: "green", sColor: "white", chosenP: 0});

    for(let i = 0; i < 14; i++){
      this.chosenTeams.push(null);
    }
    
  }
  openModal(template: TemplateRef<any>, placeC: number) {
    const initialState = {
      teams: this.teams,
      palce: placeC,
      cTeam: this.chosenTeams
    };
    this.modalRef = this.modalService.show(TeamListComponent, {initialState});
    this.modalRef.content.pick.subscribe(result => {
      let indx = this.teams.findIndex(team=> team.id == result);
      let delIndex = this.chosenTeams.findIndex(team => team != null && team.id == result);
      console.log("trhe "+delIndex);
      if(delIndex != -1)
        this.chosenTeams[delIndex] = null;
      this.chosenTeams[placeC-1] = this.teams[indx];
      this.chosenTeams[placeC-1].chosenP = placeC;
      console.log(this.chosenTeams);
    });
    this.modalRef.content.closeBtnName = 'סגור';
  }
}
