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
import { EditpageComponent } from "./editpage/editpage.component";
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { KendoeditorComponent } from "./kendoeditor/kendoeditor.component";
import { DialogComponent } from "./kendoeditor/dialog.component";
import { AppErrorHandler } from "./common/app-error-handler";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SpecificationsComponent,
    EssayformComponent,
    ParaformComponent,
    EditpageComponent,
    KendoeditorComponent,
    DialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DialogsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "specifications",
        component: SpecificationsComponent,
        canActivate: [AuthGuard],
      },
      { path: "edit", component: EditpageComponent, canActivate: [AuthGuard] },
      { path: "", component: LoginComponent, pathMatch: "full" },
    ]),
    EditorModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
