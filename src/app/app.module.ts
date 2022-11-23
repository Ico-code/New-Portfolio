import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './modules/widgets/header/header.component';
import { FooterComponent } from './modules/widgets/footer/footer.component';
import { HomeComponent } from './modules/components/home/home.component';
import { AboutMeComponent } from './modules/components/about-me/about-me.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { ContactMeComponent } from './modules/components/contact-me/contact-me.component';
import { ProjectDetailsComponent } from './modules/components/project-details/project-details.component';
import { ContactFormComponent } from './modules/widgets/contact-form/contact-form.component';
import { PortfolioListComponent } from './modules/components/portfolio-list/portfolio-list.component';
import { PortfolioListItemComponent } from './modules/components/portfolio-list/portfolio-list-item/portfolio-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactMeComponent,
    ProjectDetailsComponent,
    ContactFormComponent,
    PortfolioListComponent,
    PortfolioListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
