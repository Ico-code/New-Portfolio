import { PortfolioService } from './../../services/portfolioService/portfolio-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolioInterface } from './../../services/portfolioService/portfolioListInterface';
import { LogosService } from '../../services/logos/logos.service';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatTooltip} from '@angular/material';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  portfolioData: portfolioInterface;
  id: number = 0;
  private sub: any;

  selectedContentArea: Array<{ id: string; appearanceDirection?: string }> = [
    { id: 'About', appearanceDirection: 'leftNotSelectedContent' },
    { id: 'Technologies', appearanceDirection: 'rightNotSelectedContent' },
  ];
  activeContentArea: string = 'About';

  changeSelectedContentArea(activeID: string) {
    this.activeContentArea = activeID;
    let currentIDPosition = this.currentlyActiveID(this.activeContentArea);
    for (let i = 0; i < this.selectedContentArea.length; i++) {
      if (i < currentIDPosition) {
        this.selectedContentArea[i].appearanceDirection =
          'leftNotSelectedContent';
        return;
      } else if (i > currentIDPosition) {
        this.selectedContentArea[i].appearanceDirection =
          'rightNotSelectedContent';
        return;
      }
    }
  }

  currentlyActiveID(activeContentArea: string) {
    for (
      let currentItem = 0;
      currentItem < this.selectedContentArea.length;
      currentItem++
    ) {
      if (this.selectedContentArea[currentItem].id == activeContentArea) {
        return currentItem;
      }
      if (this.selectedContentArea[currentItem].id == activeContentArea) {
        return currentItem;
      }
    }
    return 10;
  }

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    public logoService : LogosService
  ) {
    this.portfolioData = this.portfolioService.getPortfolioItem(this.id);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
