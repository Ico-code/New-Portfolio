import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  innerWidth: number = window.innerWidth;
  mobileView: boolean = true;

  checkForMobileView() {
    if(this.innerWidth < 768){
      this.mobileView = true;
    }
    else {
      this.mobileView = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkForMobileView()
  }

  constructor() {
    this.checkForMobileView()
  }

  ngOnInit(): void {

  }

}
