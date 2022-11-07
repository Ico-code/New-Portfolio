import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/components/home/home.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { AboutMeComponent } from './modules/components/about-me/about-me.component';
import { ContactMeComponent } from './modules/components/contact-me/contact-me.component';
import { ProjectDetailsComponent } from './modules/components/project-details/project-details.component';

const routes: Routes = [
  {path:'Home',title:'Home',component:HomeComponent},
  {path:'Portfolio',title:'Portfolio',component:PortfolioComponent},
  {path:'Project',title:'Project',component:ProjectDetailsComponent},
  {path:'About',title:'About',component:AboutMeComponent},
  {path:'Contact',title:'Contact',component:ContactMeComponent},
  {path:'**',redirectTo:'/Home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
