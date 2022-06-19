import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { DataComponent } from './data/data.component';
const routes: Routes = [
  {path: "", component: DataComponent},
  {path: 'ui', component: UiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
