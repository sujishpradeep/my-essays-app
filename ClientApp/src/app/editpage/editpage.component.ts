import { Component, OnInit } from "@angular/core";
import { getParas, getEssayDetails } from "../testservice/essay-data";

@Component({
  selector: "app-editpage",
  templateUrl: "./editpage.component.html",
  styleUrls: ["./editpage.component.css"]
})
export class EditpageComponent implements OnInit {
  constructor() {}

  paragraphArray = [];
  essayDetails = {
    title: "",
    wordCount: 0
  };

  isExpanded: boolean[] = [];

  ngOnInit() {
    this.paragraphArray = getParas();
    this.essayDetails = getEssayDetails();
    this.isExpanded = new Array(this.paragraphArray.length).fill(false);
  }

  onClick(i) {
    console.log("before", this.isExpanded);
    console.log("i", i);
    (this.isExpanded[i] as any) = !this.isExpanded[i];

    console.log("after", this.isExpanded);
  }
}
