import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, MaterialModule, FlexLayoutModule],
})
export class LazyModule {}
