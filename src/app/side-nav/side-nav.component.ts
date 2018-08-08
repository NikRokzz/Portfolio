import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('side-menu__container').style.width = '0';
    // document.getElementById('main__container').style.marginLeft = '0';
    document.getElementById('main__header').style.marginLeft = '0';
    // document.getElementById('main__footer').style.marginLeft = '0';
    document.getElementById('router__root').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }

}
