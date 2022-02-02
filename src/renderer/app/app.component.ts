

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '#app',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';

  ngOnInit(): void {
    console.log('component initialized');
  }
}

