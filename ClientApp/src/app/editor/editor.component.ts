import { Component, OnInit, Input } from "@angular/core";

import Countable from "countable";
@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Input("maxWordCount") maxWordCount: Number;

  wordCount: Number = 0;
  value = "";

  change(value: any): void {
    //Regular expression to split the input value based on HTML tags
    let tagsArray = value
      .split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim)
      .filter(x => x.trim() !== "");

    this.wordCount = 0;

    tagsArray.forEach(t => {
      const content = t.replace(/<[^>]*>?/gm, "");

      if (content) {
        //Replace punctuations with "" to exclude from word count.
        var punctRegX = /[!\.?;,:&_\-\-\{\}\[\]\(\)~#'"]/g;
        var contentcontent = content.replace(punctRegX, "");

        //Replace spaces with "" to exclude extra spaces from word count.
        var trimRegX = /(^\s+)|(\s+$)/g;
        contentcontent = contentcontent.replace(trimRegX, "");

        if (contentcontent) {
          const splitRegX = /\s+/;
          var array = contentcontent.split(splitRegX);
          this.wordCount += array.length;
        }
      }
    });
  }
}
