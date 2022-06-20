import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './components/ui/ui.component';
import { DataComponent } from './components/data/data.component';
const routes: Routes = [
  {path: "", component: DataComponent},
  {path: 'ui', component: UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
