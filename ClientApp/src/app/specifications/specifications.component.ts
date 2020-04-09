import { Component, OnInit } from "@angular/core";
import { EssaysService } from "../services/essays.service";

import { AppError } from "../common/app-error";
import { BadInput } from "../common/bad-input";
import { eventDispatcher } from "../store";
import { ActionTypes } from "../store/actions";
import { state } from "../store";

@Component({
  selector: "app-specifications",
  templateUrl: "./specifications.component.html",
  styleUrls: ["./specifications.component.css"],
})
export class SpecificationsComponent implements OnInit {
  constructor(private service: EssaysService) {}
  paragraphArray = [];

  essayDetails = { title: "", wordCount: 0 };

  ngOnInit(): void {
    this.service.getAll().subscribe((response: any) => {
      this.essayDetails = response;
      this.resetMultiplier();
    });

    this.paragraphArray = [...state.paras];
    localStorage.setItem("reload", "false");
  }

  multiplicator = 0;

  Math = Math;

  submitEssayForm(formValue) {
    this.essayDetails.title = formValue.title;
    this.essayDetails.wordCount = formValue.wordCount;
    //  setEssayDetails(this.essayDetails.title, this.essayDetails.wordCount);
    this.service
      .update({
        Title: this.essayDetails.title,
        WordCount: this.essayDetails.wordCount,
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert("This essay has already been inserted");
          } else {
            throw error;
          }
        }
      );
  }

  submitParaForm(formValue) {
    this.paragraphArray.push({
      id: this.paragraphArray.length,
      reference: formValue.reference,
      weightage: formValue.weightage ? formValue.weightage : "Low",
    });
    this.resetMultiplier();
    // savePara({
    //   id: this.paragraphArray.length,
    //   reference: formValue.reference,
    //   weightage: formValue.weightage ? formValue.weightage : "Low",
    // });

    eventDispatcher.next({
      type: ActionTypes.CREATE_PARA,
      payload: {
        id: this.paragraphArray.length,
        reference: formValue.reference,
        weightage: formValue.weightage ? formValue.weightage : "Low",
      },
    });
  }

  //Initialize essay Detail
  resetEssayDetails() {
    this.service
      .update({
        Title: "",
        WordCount: 0,
      })
      .subscribe(
        (response) => {
          location.reload();
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert("This essay has already been inserted");
          } else {
            throw error;
          }
        }
      );
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
