import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: String = 'Vote-app';
   voteOptionList: any[] = [];
   voteList: number[] = [];
   optionList: String[] = [];
   voteStatement: String = "";

   updateVoteOptions($event){
      this.voteOptionList = $event;
      if(this.voteOptionList.length == 0){
        this.voteStatement = "";
        this.voteList = [];
        this.optionList = [];
      }
   }
   updateVoteStatement($event){
      this.voteStatement = $event;
   }
   updateVoteList($event){
      this.voteOptionList = $event;
      this.voteList = [];
      this.optionList = [];
      for(let i=0; i < this.voteOptionList.length; i++){
        this.optionList.push(this.voteOptionList[i].text);
        this.voteList.push(this.voteOptionList[i].vote);
      }
   }
}
