import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web_Portfolio';

  onActivate() {
    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });
 }

}
