import { Component, ViewChild } from '@angular/core';
import { transition, style, animate, trigger, state } from '@angular/animations';
import { Chart } from 'chart.js';
const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('5s ease-in', style({
    'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('5s ease-out', style({
    'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
  }))
])

const fadeIn = trigger('slideInOut', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('fade',[
      state('void', style({backgroundColor:'red'}),
      ),
      transition('void => *',       
       animate(2000,style({backgroundColor:'blue'}))
      )
    ]),
    trigger('slideUp',[
      transition(':enter',[
        style({position:'absolute',transform:'translateY(0px)'}),
        animate(2000,style({transform:'translateY(-20px)'}))
      ]),
      transition(':leave',[
        animate(2000,style({position:'absolute',opacity:0}))
      ])
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
  show = false;
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  onClick() {
    this.show = true;
  }

  onSave() {
    this.show = false;
  }
  delete=true;
  del(){
    this.delete=false;
  }
  ngAfterViewInit() {
    const data =  [
      { x: 1, y: 2 },
      { x: 2500, y: 2.5 },
      { x: 3000, y: 5 },
      { x: 3400, y: 4.75 },
      { x: 3600, y: 4.75 },
    
    ];
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    var gradient = this.ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(88, 126, 33, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
    Chart.defaults.global.defaultFontStyle = 'bold'; //font style
    let myChart = new Chart(this.ctx, {
      type: 'line',
      
      data: {
        
        datasets: [{
          label: 'Höhenlinie',
          backgroundColor: gradient,
          borderColor: "#587e21",
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth:2,
          hoverBorderWidth:2,
          pointBackgroundColor:'#fff',
          data:data,
        }]
      },
      options: {
        legend: {     //removing top legend with rectangular box
        display: false
     },
     tooltips: {
      callbacks: {
        label: (tooltipItem, data) =>{
         const str = this.x(tooltipItem);
         console.log(str);
          return str;
        }
      },
      displayColors: false //for removing square shape in tooltip
    },
        responsive: true,
        title: {
          display: false,
          },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            
            scaleLabel: {
              labelString: 'Länge',
              display: true,
                        }
          }],
          yAxes: [{
            type: 'linear',
            
            scaleLabel: {
              labelString: 'Höhe',
              display: true,
              
            },
            
            ticks: this.tick,
            
          }
        ],
        }
      }
    });
  }
   tick = {
    min: 0,
    fontSize: 10,
              max: 5,
              stepSize: 1,
              suggestedMin: 0.5,
              suggestedMax: 5.5,
              callback: (label: any) =>{
                switch (label) {
                  case 0:
                    return 'ZERO';
                  case 1:
                    return 'ONE';
                  case 2:
                    return 'TWO';
                  case 3:
                    return 'THREE';
                  case 4:
                    return 'FOUR';
                  case 5:
                    return 'FIVE';
                }
              }
  }
  tick1={
    display:true
  }

 x(tooltipItem:any){
 return tooltipItem.value +"/12/2021"
}
}

