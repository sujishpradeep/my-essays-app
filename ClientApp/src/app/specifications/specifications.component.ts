import { Component, OnInit } from "@angular/core";
import {
  savePara,
  setEssayDetails,
  getParas,
  getEssayDetails
} from "../testservice/essay-data";

@Component({
  selector: "app-specifications",
  templateUrl: "./specifications.component.html",
  styleUrls: ["./specifications.component.css"]
})
export class SpecificationsComponent implements OnInit {
  constructor() {}
  paragraphArray = [];

  ngOnInit(): void {
    this.paragraphArray = [...getParas()];
    this.essayDetails = getEssayDetails();
    this.resetMultiplier();
  }

  multiplicator = 0;

  essayDetails = {
    title: "",
    wordCount: 0
  };

  Math = Math;

  submitEssayForm(formValue) {
    this.essayDetails.title = formValue.title;
    this.essayDetails.wordCount = formValue.wordCount;
    setEssayDetails(this.essayDetails.title, this.essayDetails.wordCount);
  }

  submitParaForm(formValue) {
    this.paragraphArray.push({
      id: this.paragraphArray.length,
      reference: formValue.reference,
      weightage: formValue.weightage ? formValue.weightage : "Low"
    });
    this.resetMultiplier();
    savePara({
      id: this.paragraphArray.length,
      reference: formValue.reference,
      weightage: formValue.weightage ? formValue.weightage : "Low"
    });
  }

  //Calculate Multiplier used for finding approximate word count of each Paragraph
  resetMultiplier() {
    // For 1 "Low" Para, 1 "Medium" Para and 1 "High" Para -> total weightage = (1 + 2 + 3) = 6
    const totalWeightage = this.paragraphArray.reduce(
      (a, b) => a + (this.getWeightageMultiplicator(b.weightage) || 0),
      0
    );

    this.multiplicator = this.essayDetails.wordCount / totalWeightage;
  }

  // Paragraph Weightage used to calculate approximate word count for each Para
  // Low -> 1 | Medium -> 2 | High -> 3
  getWeightageMultiplicator(weightage) {
    switch (weightage) {
      case "Low": {
        return 1;
      }
      case "Medium": {
        return 2;
      }
      case "High": {
        return 3;
      }
      default: {
        return 1;
      }
    }
  }
}
