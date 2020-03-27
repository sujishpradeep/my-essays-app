import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  wordCount = 0;

  change(value: any): void {
    // it splits the text on space/tab/enter
    // const splitText = value ? value.split(/\s+/) : 0;

    // this.wordCount = splitText ? splitText.length : "";

    const matches = value.match(/[^\s\n\r]+/g);

    console.log("matches", matches);

    this.wordCount = matches ? matches.length : 0;
  }
}
