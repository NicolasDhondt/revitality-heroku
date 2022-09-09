import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }
}
