import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoComponent } from './credito.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CreditoComponent }];

@NgModule({
  declarations: [CreditoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CreditoModule {}
