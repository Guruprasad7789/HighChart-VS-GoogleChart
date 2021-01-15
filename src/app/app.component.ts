import { Component } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { ngOnInit() {
  this.drawChart();
  
}
drawChart() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Sales'],
      ['Jan',  15],
      ['Feb',  11.3],
      ['Mar',  11],
      ['Apr',  13.9],
      ['May',  10.7],
      ['Jun',  12],
      ['Jul',  9.5],
      ['Aug',  9],
    ]);

    var options = {
      title: 'Company Performance',
         legend: 'none',
      pointSize: 10,
      colors: ['#587e21'],
    };

    var chart = new google.visualization.AreaChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
}
}
