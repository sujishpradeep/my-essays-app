import {
  Component,
  OnInit,
  ViewChild,
  Output,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { DialogComponent } from "./dialog.component";

import { EditorComponent } from "@progress/kendo-angular-editor";

import * as CSL from "citeproc";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-kendoeditor",
  templateUrl: "./kendoeditor.component.html",
  styleUrls: ["./kendoeditor.component.css"]
})
export class KendoeditorComponent {
  @Input("maxWordCount") maxWordCount: Number;
  @Output() @ViewChild("editor") public editor: EditorComponent;

  @ViewChild("upload") public dialog: DialogComponent;

  wordCount: Number = 0;
  value = "";

  changeDetection: ChangeDetectionStrategy.OnPush;

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
  open() {
    this.dialog.open();
  }
  setReference(reference) {
    console.log("reference ", reference);
  }
}
