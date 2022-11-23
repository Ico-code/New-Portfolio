import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogosService {

  getTechnology(technology:String){
    switch(technology.toLowerCase()){
      case 'angular' : return 'assets/images/Angular_full_color_logo.svg';
      case 'bootstrap' : return'assets/images/Bootstrap_logo.svg';
      case 'css' : return 'assets/images/CSS3_logo.svg';
      case 'git' : return 'assets/images/Git-logo.svg';
      case 'github' : return 'assets/images/github.svg';
      case 'html' : return 'assets/images/HTML5_logo_and_wordmark.svg';
      case 'json' : return 'assets/images/JSON_vector_logo.svg';
      case 'typescript' : return 'assets/images/Typescript_logo_2020.svg';
      case 'javascript' : return 'assets/images/Unofficial_JavaScript_logo_2.svg';
      default : return 'assets/images/default-placeholder.png';
    }
  }

  constructor() { }
}
