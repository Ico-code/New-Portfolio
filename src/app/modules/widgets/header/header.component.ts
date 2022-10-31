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
  menuOpen:boolean = false;

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
    this.toggleMenu(false)
    this.checkForMobileView()
  }

  toggleMenu(state?:boolean) {
    if(state){
      this.menuOpen = state;
    }
    this.menuOpen = !this.menuOpen;
  }

  constructor() {
    this.checkForMobileView()
  }

  ngOnInit(): void {

  }

}
