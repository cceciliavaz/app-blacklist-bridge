import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'app/components/sidebar/sidebar.module';
import { MaterialModule } from '../shared/material.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent, CreateAccountComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: MainComponent
    }]),
    MaterialModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
