import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pok-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
