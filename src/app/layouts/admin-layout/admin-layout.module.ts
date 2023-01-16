import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { NguiMapModule } from "@ngui/map";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { UserComponent } from "../../pages/user/user.component";
import { BlacksComponent } from "../../pages/blacks/blacks.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NguiMapModule.forRoot({
      apiUrl: "https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE",
    }),
  ],
  declarations: [
    UserComponent,
    BlacksComponent,
  ],
})
export class AdminLayoutModule {}
