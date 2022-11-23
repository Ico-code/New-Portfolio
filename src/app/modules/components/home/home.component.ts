import { portfolioInterface } from './../../services/portfolioService/portfolioListInterface';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolioService/portfolio-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  portfolioItems?: Array<portfolioInterface> =
    this.portfolioService.getMultiplePortfolioItems([0,1,2,5]);

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
