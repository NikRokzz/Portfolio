import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('side-menu__container').style.width = '270px';
    // document.getElementById('main__container').style.marginLeft = '270px';
    document.getElementById('main__header').style.marginLeft = '270px';
    // document.getElementById('main__footer').style.marginLeft = '270px';
    document.getElementById('router__root').style.marginLeft = '270px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

}
