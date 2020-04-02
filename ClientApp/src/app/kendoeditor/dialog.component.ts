import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EditorComponent } from "@progress/kendo-angular-editor";

@Component({
  selector: "my-dialog",
  styles: [
    `
      label {
        width: 100px;
      }
    `
  ],
  template: `
    <kendo-dialog
      title="Add a reference"
      *ngIf="opened"
      (close)="close()"
      [minWidth]="250"
      [width]="450"
    >
      <div class="row example-wrapper">
        <div class="col-xs-8 col-sm-12 example-col">
          <div class="card">
            <div class="card-block">
              <form class="k-form-inline">
                <div class="k-form-field">
                  <label [for]="bookInput">Book </label>
                  <input
                    #bookInput
                    kendoTextBox
                    (change)="setValues('book', $event.target.value)"
                  />
                </div>

                <div class="k-form-field">
                  <label [for]="authorInput">Author </label>
                  <input
                    #authorInput
                    kendoTextBox
                    (change)="setValues('author', $event.target.value)"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <kendo-dialog-actions>
        <button kendoButton (click)="close()">Cancel</button>
        <button
          kendoButton
          [disabled]="canInsert"
          primary="true"
          (click)="setReference()"
        >
          Insert
        </button>
      </kendo-dialog-actions>
    </kendo-dialog>
  `
})
export class DialogComponent {
  @Input() public editor: EditorComponent;
  @Output("onSetReference") onSetReference = new EventEmitter();

  public opened = false;

  email = "ABC";

  reference = {
    book: "",
    author: ""
  };
  public book: string = "";
  public author: string;

  setValues(name, value) {
    this.reference[name] = value;
  }
  public get canInsert(): boolean {
    return !this.reference.book;
  }

  public setReference(): void {
    // Invoking the set Reference of Editor.
    this.onSetReference.emit(this.reference);

    // Closing the Dialog.
    this.close();
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
    this.resetData();
  }

  public resetData(): void {
    this.book = null;
    this.author = null;
  }
}
