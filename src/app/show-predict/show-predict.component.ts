import { Component, OnInit } from '@angular/core';
import { PickService } from '../pick.service';
import { ChosenTeam } from '../models/chosen-team';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-predict',
  templateUrl: './show-predict.component.html',
  styleUrls: ['./show-predict.component.css']
})
export class ShowPredictComponent implements OnInit {
  chosenTeams:ChosenTeam[];
  id:string;
  pickName:string;
  pickBy:string;
  constructor(private pickService:PickService, private route: ActivatedRoute) {
    setTimeout(()=>{this.chosenTeams = this.pickService.pickedTeams;}, 200);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.pickService.getPick(this.id);
  });
  setTimeout(()=>{this.getNames()}, 100);
  }

  getNames(){
    this.pickName = this.pickService.pickName;
    this.pickBy = this.pickService.pickBy;
  }

}
