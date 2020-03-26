import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-paraform",
  templateUrl: "./paraform.component.html",
  styleUrls: ["./paraform.component.css"]
})
export class ParaformComponent implements OnInit {
  @Output("onParaSubmit") onParaSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  paraform = new FormGroup({
    reference: new FormControl("", Validators.required),
    weightage: new FormControl()
  });

  get reference() {
    return this.paraform.get("reference");
  }

  get weightage() {
    return this.paraform.get("weightage");
  }

  weightageValues = [
    {
      id: 1,
      name: "Low"
    },
    {
      id: 2,
      name: "Medium"
    },
    {
      id: 3,
      name: "High"
    }
  ];

  paraSubmit(f) {
    this.onParaSubmit.emit(f);
    this.paraform.reset();
    this.paraform.setValue({ reference: "", weightage: "Low" });
    console.log(this.paraform);
  }
}
