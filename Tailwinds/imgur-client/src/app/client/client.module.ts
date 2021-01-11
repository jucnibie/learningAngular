import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

/**
 * Ant Design
 */
import { NzButtonModule } from 'ng-zorro-antd/button';

const antModule = [
  NzButtonModule
];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    antModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
