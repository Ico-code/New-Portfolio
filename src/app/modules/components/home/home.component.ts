import { portfolioInterface } from './../../services/portfolioListInterface';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  portfolioItems?: Array<portfolioInterface> =
    this.portfolioService.getMultiplePortfolioItems([0,1,2,3]);

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
