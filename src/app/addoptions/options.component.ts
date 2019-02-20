import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-vote-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  optionList: any[] = [];
  voteQuestion: String = "";
  isStarted: boolean = false;
  maxOptions: number = 10;
  
  newOPtion = { text:  "", vote: 0 };

  constructor() { }

  ngOnInit() {
  }

  @Output() setStstement = new EventEmitter<String>();
  @Output() setOptions = new EventEmitter<any[]>();

  start(){
    if(this.voteQuestion){
      this.isStarted = true;
      this.setStstement.emit(this.voteQuestion);
    }
  }

  reset(){
      this.isStarted = false;
      this.voteQuestion = "";
      this.optionList = [];
      this.setOptions.emit(this.optionList);
  }

  addOption(){
    if(this.newOPtion.text.trim()){
      let option = Object.assign({}, this.newOPtion)
      this.optionList.push(option);
      this.newOPtion = {text: "", vote: 0};
      this.setOptions.emit(this.optionList);
    }
  }

  removeOption(index){
    this.optionList.splice(index,1);
    this.setOptions.emit(this.optionList);
  }
}
