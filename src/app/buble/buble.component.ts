import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
@Component({
  selector: 'app-buble',
  templateUrl: './buble.component.html',
  styleUrls: ['./buble.component.css']
})
export class BubleComponent implements OnInit {

  public bubbleChartOptions: ChartOptions = {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: 50,
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 50,
          }
        }]
      }
    };
    constructor() { }

  ngOnInit() {
  }
    public bubbleChartType: ChartType = 'bubble';
    public bubbleChartLegend = true;

    public bubbleChartData: ChartDataSets[] = [
      {
        data: [
          { x: 15, y: 15, r: 15 },
          { x: 25, y: 15, r: 25 },
          { x: 36, y: 12, r: 33 },
          { x: 10, y: 18, r: 18 },
        ],
        label: 'Investment Equities',
      },
    ];
}
