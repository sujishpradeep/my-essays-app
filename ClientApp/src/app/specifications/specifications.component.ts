import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-specifications",
  templateUrl: "./specifications.component.html",
  styleUrls: ["./specifications.component.css"]
})
export class SpecificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  multiplicator = 0;

  essayDetails = {
    title: "",
    wordCount: 0
  };

  paraDetails = [];

  submitEssayForm(formValue) {
    this.essayDetails.title = formValue.title;
    this.essayDetails.wordCount = formValue.wordCount;

    console.log(this.essayDetails);
  }

  submitParaForm(formValue) {
    this.paraDetails.push({
      reference: formValue.reference,
      weightage: formValue.weightage ? formValue.weightage : "Low"
    });
    this.resetMultiplier();
  }

  resetMultiplier() {
    const totalWeightage = this.paraDetails.reduce(
      (a, b) => a + (this.getWeightageMultiplicator(b.weightage) || 0),
      0
    );

    this.multiplicator = this.essayDetails.wordCount / totalWeightage;
  }

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
