import { portfolioInterface } from './../../../services/portfolioListInterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.css']
})
export class PortfolioListItemComponent implements OnInit {

  @Input() projectData:portfolioInterface = {id:0, img:'', title: '', description: ''};

  constructor() {}

  ngOnInit(): void {
  }

}
