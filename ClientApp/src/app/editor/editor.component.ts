import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  wordCount = 0;

  value = "";

  change(value: any): void {
    // it splits the text on space/tab/enter
    // const splitText = value ? value.split(/\s+/) : 0;

    // this.wordCount = splitText ? splitText.length : "";

    const matches = value.match(/[^\s\n\r]+/g);

    this.wordCount = matches ? matches.length : 0;
  }
}
