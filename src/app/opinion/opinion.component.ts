import { Component, OnInit } from '@angular/core';
import { opinions } from '../opinions';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  opinions = opinions;

  constructor() { }

  ngOnInit(): void {
  }

}
