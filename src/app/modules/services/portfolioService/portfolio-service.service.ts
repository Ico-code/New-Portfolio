import { portfolioInterface } from './portfolioListInterface';
import { Injectable } from '@angular/core';
import { portfolioItems } from './portfolioItems';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  portfolioItems:Array<portfolioInterface> = portfolioItems;

  getMultiplePortfolioItems(ids:Array<number>){
    let arrays:Array<portfolioInterface> = [];
    ids.forEach(id => {
      arrays.push(this.portfolioItems[id])
    });
    console.log(arrays)
    return arrays;
  }

  getPortfolioItem (id:number) {
    return this.portfolioItems[id]
  }

  getAllPortfolioItems () {
    return portfolioItems;
  }

  constructor() { }
}
