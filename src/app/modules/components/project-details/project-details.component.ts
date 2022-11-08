import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolioInterface } from './../../services/portfolioListInterface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  // used for storring the data, for the HTML document
  portfolioData?:portfolioInterface;




  id?: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
