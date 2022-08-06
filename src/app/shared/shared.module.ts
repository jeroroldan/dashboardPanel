import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { FocusInputDirective } from './directives/focus-input.directive';
// import { DialogComponent } from './dialog/dialog.component';





@NgModule({
  declarations: [ErrorMsgDirective,FocusInputDirective, ],
  imports: [
    CommonModule
  ],
  exports:[ErrorMsgDirective,FocusInputDirective]
})
export class SharedModule { }
