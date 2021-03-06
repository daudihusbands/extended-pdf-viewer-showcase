import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  public selectedTab = 0;

  public page = 5;

  public pageLabel: string;

  public onSelectedTab(event: number): void {
    this.selectedTab = event;
  }
}
