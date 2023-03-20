import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { BodyComponent } from './body/body.component';
import { CoupenComponent } from './coupen/coupen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'product',
  component: ProductsComponent
},
{
  path: 'stat',
  component: StatisticsComponent
},
{
  path: 'coupon',
  component: CoupenComponent
},
{
  path: 'page',
  component: PagesComponent
},
{
  path: 'media',
  component: MediaComponent
},
{
  path: 'settings',
  component: SettingsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
