import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-essayform",
  templateUrl: "./essayform.component.html",
  styleUrls: ["./essayform.component.css"]
})
export class EssayformComponent implements OnInit {
  ngOnInit() {}

  essayform = new FormGroup({
    title: new FormControl("", Validators.required),
    wordCount: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.max(1000)
    ])
  });

  @Output("onEssaySubmit") onEssaySubmit = new EventEmitter();

  get title() {
    return this.essayform.get("title");
  }

  get wordCount() {
    return this.essayform.get("wordCount");
  }

  essaySubmit(f) {
    this.onEssaySubmit.emit(f);
    this.essayform.reset();
  }
}
