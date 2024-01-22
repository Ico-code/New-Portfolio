import { portfolioInterface } from './portfolioListInterface';
import { Injectable } from '@angular/core';
import { portfolioItems } from './portfolioItems';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  portfolioItemsList:Array<portfolioInterface> = portfolioItems;

  getMultiplePortfolioItems(ids:Array<number>){
    let arrays:Array<portfolioInterface> = [];
    ids.forEach(id => {
      arrays.push(this.portfolioItemsList[id])
    });
    return arrays;
  }

  getPortfolioItem (id:number) {
    return this.portfolioItemsList[id]
  }

  getAllPortfolioItems () {
    return portfolioItems;
  }

  constructor() { }
}
