import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.getIPDetail();
  }

  public getIPDetail() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://jsonip.appspot.com/?callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
    
  }

  public DisplayIP(response) {
    console.log(response.ip);
  }
  
}
