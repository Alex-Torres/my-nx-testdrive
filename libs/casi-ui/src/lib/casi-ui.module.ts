import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideNavBarComponent],
  exports: [SideNavBarComponent]
})
export class CasiUiModule {}
