import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  openNav(){
    document.getElementById('side-menu__container').style.width = '270px';
    document.getElementById('main__container').style.marginLeft = '270px';
    document.getElementById('main__header').style.marginLeft = '270px';
    document.getElementById('main__footer').style.marginLeft = '270px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    document.getElementById('side-menu__container').style.width = '0';
    document.getElementById('main__container').style.marginLeft = '0';
    document.getElementById('main__header').style.marginLeft = '0';
    document.getElementById('main__footer').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }

}
