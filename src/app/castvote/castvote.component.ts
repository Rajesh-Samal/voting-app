import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'cast-vote',
  templateUrl: './castvote.component.html',
  styleUrls: ['./castvote.component.css']
})
export class CastVoteComponent  {
  voteOptionList: any[] = [];
  voteQuestion: String = "";
  voteResult: String = "";
  isVoted: boolean = true;

  constructor() { }
  
  @Input() voteStatement: string;
  @Input() optionList: any[];

  @Output() setVote = new EventEmitter<any[]>();

  ngOnInit() { 
    this.voteQuestion = this.voteStatement;
   }


  ngOnChanges(changes: SimpleChanges) {
    const optionList: SimpleChange = changes.optionList;
    console.log('got name: ', optionList.currentValue);
    this.voteOptionList = optionList.currentValue;
  }

  vote(){
    console.log("Voted for:"+ this.voteResult);
    this.updateVote(this.voteResult);
    this.setVote.emit(this.voteOptionList);
    this.voteResult = "";
    this.isVoted = true;
  }

  updateVote(result){
    for(let i=0; i < this.voteOptionList.length; i++){
      if(this.voteOptionList[i].text == result){
        this.voteOptionList[i].vote += 1;
        break;
      }
    }
  }

}
