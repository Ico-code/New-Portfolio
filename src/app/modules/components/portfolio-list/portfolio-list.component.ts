import { portfolioInterface } from './../../services/portfolioService/portfolioListInterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  @Input() portfolioItems?: Array<portfolioInterface>;

  constructor() { }

  ngOnInit(): void {
  }

}
