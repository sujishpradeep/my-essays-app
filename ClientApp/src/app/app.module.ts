import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { SpecificationsComponent } from "./specifications/specifications.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EssayformComponent } from "./essayform/essayform.component";
import { ParaformComponent } from "./paraform/paraform.component";
import { EditorModule } from "@progress/kendo-angular-editor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditorComponent } from "./editor/editor.component";
import { EditpageComponent } from "./editpage/editpage.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SpecificationsComponent,
    EssayformComponent,
    ParaformComponent,
    EditorComponent,
    EditpageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "edit", component: EditpageComponent },
      { path: "", component: SpecificationsComponent, pathMatch: "full" }
    ]),
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
