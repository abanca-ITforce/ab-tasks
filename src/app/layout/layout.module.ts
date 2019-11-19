import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CopyrightComponent } from './shell/copyright/copyright.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

@NgModule({
  declarations: [
    ShellComponent,
    TopBarComponent,
    CopyrightComponent,
    MainContentComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [ShellComponent]
})
export class LayoutModule {}
