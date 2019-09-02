import { Component, OnInit, AfterContentChecked } from '@angular/core';

declare function $(any);

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styles: []
})
export class CreateProjectComponent implements AfterContentChecked {

  constructor() { }

  ngOnInit() {
    //initDatePicker();
  }

  ngAfterContentChecked() {
    var date_input=$('input[name="fecha"]'); //our date input has the name "date"
    var container="body";//$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    console.log(date_input);
    date_input.datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
  }

}
