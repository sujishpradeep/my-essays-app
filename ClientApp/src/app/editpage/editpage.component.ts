import { Component, OnInit } from "@angular/core";

import { EssaysService } from "../services/essays.service";
import { state } from "../store";

@Component({
  selector: "app-editpage",
  templateUrl: "./editpage.component.html",
  styleUrls: ["./editpage.component.css"],
})
export class EditpageComponent implements OnInit {
  paragraphArray = [];

  constructor(private essaysService: EssaysService) {
    this.essayDetails = { title: "", wordCount: 0 };
  }

  essayDetails = { title: "", wordCount: 0 };

  isExpanded: boolean[] = [];

  multiplicator = 0;

  Math = Math;

  ngOnInit() {
    this.paragraphArray = state.paras;

    this.essaysService.getAll().subscribe((response: any) => {
      this.essayDetails = response;
      this.resetMultiplier();
    });

    if (this.paragraphArray)
      this.isExpanded = new Array(this.paragraphArray.length).fill(false);
  }

  //Calculate Multiplier used for finding approximate word count of each Paragraph
  resetMultiplier() {
    // For 1 "Low" Para, 1 "Medium" Para and 1 "High" Para -> total weightage = (1 + 2 + 3) = 6
    if (this.paragraphArray) {
      const totalWeightage = this.paragraphArray.reduce(
        (a, b) => a + (this.getWeightageMultiplicator(b.weightage) || 0),
        0
      );

      this.multiplicator = this.essayDetails.wordCount / totalWeightage;
    }
  }

  onClick(i) {
    (this.isExpanded[i] as any) = !this.isExpanded[i];
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
