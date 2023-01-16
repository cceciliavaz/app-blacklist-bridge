import { NgModule } from '@angular/core';
import { SidebarModule } from 'app/components/sidebar/sidebar.module';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    SidebarModule
  ],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
