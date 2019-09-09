import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: []
})
export class ProjectComponent implements OnInit {

  idProjecto: String = null;

  constructor(private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.idProjecto = params.id;
    })
  }

}
