import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styles: []
})
export class DetailProjectComponent implements OnInit {

  idProyecto: String = '';

  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe((params) => {
      console.log(params.id);
      this.idProyecto = params.id;
    })
  }

}
