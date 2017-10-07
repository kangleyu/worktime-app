import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from "../shared/index";

@Component({
  selector: 'wt-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent {
  // General Information Data
  public general: any = {
    totalProjects: '0',
    totalPayments: '0',
    totalEmployee: '0',
    totalMales: '0',
    totalFemales: '0',
    totalWorktypes: '0'
  };

  // Employee Bar Chart Data
  // public employeeBarChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public employeeBarChartLabels: string[] = ["<10", "10-20", "20-30", "30-40", "40-50", "50-60", ">60"];
  // public employeeBarChartData: any[] = [
  //   { data: [0, 0, 0, 0, 0, 0, 0], label: '男' },
  //   { data: [0, 0, 0, 0, 0, 0, 0], label: '女' }
  // ];
  // public employeeChartColors: [any] = [
  //   {
  //     backgroundColor: 'rgba(52,152,219,0.5)',
  //     borderColor: 'rgba(52,152,219,0.5)',
  //     pointBackgroundColor: 'rgba(52,152,219,0.5)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(52,152,219,0.5)'
  //   },
  //   {
  //     backgroundColor: 'rgba(226,80,65,0.5)',
  //     borderColor: 'rgba(226,80,65,0.5)',
  //     pointBackgroundColor: 'rgba(226,80,65,0.5)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(226,80,65,0.5)'
  //   }];

  // Payments dougnuts charts data
  // public paymentsChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public paymentsChartData: number[] = [350, 450, 100];
  // public paymentsChartOptions: any = {
  //   legend: {
  //     position: 'right',
  //     fullWidth: false
  //   }
  // };

  // Payments linear charts data
  // public paymentsPerMondthChartLabel: [any] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public paymentsPerMondthChartData: [any] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  // public paymentsPerMondthChartOptions: any = {
  //   responsive: true
  // };

  constructor(
    private titleService: Title,
    private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.titleService.setTitle('综合信息');

    this.dashboardService.getEmployeeData().subscribe((res) => {
      // this.employeeBarChartLabels = res[0].labels;
      // this.employeeBarChartData = [res[1], res[2]];
    });

    this.dashboardService.getGeneralData().subscribe((res) => {
      this.general = res;
    });
  }
}
