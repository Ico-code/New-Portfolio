import { Component, OnInit, Input } from '@angular/core';

interface portfolioList {
  id: number,
  img: string,
  title: string,
  description: string,
};


@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.css']
})
export class PortfolioListItemComponent implements OnInit {

  @Input() projectData:portfolioList = {id:0, img:'', title: '', description: ''};
  @Input() maxWidth: string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
