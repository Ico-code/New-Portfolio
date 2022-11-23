import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogosService {

  getTechnology(technology:String){
    switch(technology.toLowerCase()){
      case 'angular' : return 'assets/images/logos/Angular_full_color_logo.svg';
      case 'bootstrap' : return'assets/images/logos/Bootstrap_logo.svg';
      case 'css' : return 'assets/images/logos/CSS3_logo.svg';
      case 'git' : return 'assets/images/logos/Git-logo.svg';
      case 'github' : return 'assets/images/logos/github.svg';
      case 'html' : return 'assets/images/logos/HTML5_logo_and_wordmark.svg';
      case 'json' : return 'assets/images/logos/JSON_vector_logo.svg';
      case 'typescript' : return 'assets/images/logos/Typescript_logo_2020.svg';
      case 'javascript' : return 'assets/images/logos/Unofficial_JavaScript_logo_2.svg';
      default : return 'assets/images/other/default-placeholder.png';
    }
  }

  constructor() { }
}
