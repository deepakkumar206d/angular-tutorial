import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ModelComponent implements OnInit {
 formr=false;
  private form = new FormGroup({
    name: new FormControl(),
    emailid: new FormControl(),
    username: new FormControl(),
    location: new FormControl(),
  })

  ngOnInit() {
  }

}
