import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-votechart',
  templateUrl: './votechart.component.html',
  styleUrls: ['./votechart.component.css']
})
export class VotechartComponent implements OnInit {
 
  public barChartLabels = ["AAA", "BBB", "CCC"];
  public barChartData   = [{ data: [4, 5, 2], label: "Vote-now"}];

  @Input() optionList: String[];
  @Input() voteList: number[];

  @ViewChild(BaseChartDirective)
   public chartDir: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let optionList: SimpleChange = changes.optionList;
    let voteList: SimpleChange = changes.voteList;

    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = voteList.currentValue;
    this.barChartData = clone;

    let clone1 = JSON.parse(JSON.stringify(this.barChartLabels));
    clone1 = optionList.currentValue;
    this.barChartLabels = clone1;

    console.log('Got Vote at Chat: ', optionList.currentValue);
    console.log('Got Vote at Chat: ', voteList.currentValue);
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;
   // CHART COLOR.
  public barChartColor = [
    {  backgroundColor: 'rgba(30, 169, 224, 0.8)' }
  ]

  onChartClick($event){
    console.log($event);
  }

}
