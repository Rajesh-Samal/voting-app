import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'vote-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {
  voteQuestion: String = "";
  voteOptionList: String[] = [];
  updatedVoteList: number[] = [];

  constructor() { }
  
  @Input() voteStatement: string;
  @Input() optionList: String[];
  @Input() voteList: number[];

  ngOnInit() { 
    this.voteQuestion = this.voteStatement;
  }

  ngOnChanges(changes: SimpleChanges) {
    
    let optionList: SimpleChange = changes.optionList;
    let voteList: SimpleChange = changes.voteList;
    console.log('Got Vote at Chat: ', optionList.currentValue);
    this.voteOptionList = optionList.currentValue;
    this.updatedVoteList = voteList.currentValue;
  }

}
