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

  ngOnInit() {
    this.paragraphArray = getParas();
    this.essayDetails = getEssayDetails();
  }
}
