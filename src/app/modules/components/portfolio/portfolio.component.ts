import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../../services/portfolioService/portfolio-service.service';
import { portfolioInterface } from '../../services/portfolioService/portfolioListInterface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;

  portfolioItems?: Array<portfolioInterface> = this.portfolioService.getAllPortfolioItems();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
  }

}
