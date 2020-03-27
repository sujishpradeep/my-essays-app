import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { SpecificationsComponent } from "./specifications/specifications.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditComponent } from "./edit/edit.component";
import { EssayformComponent } from "./essayform/essayform.component";
import { ParaformComponent } from "./paraform/paraform.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,

    SpecificationsComponent,
    EditComponent,
    EssayformComponent,
    ParaformComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "edit", component: EditComponent },
      { path: "", component: SpecificationsComponent, pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
