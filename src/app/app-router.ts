import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'skills', component: SkillsComponent},
    { path: '', component: HomeComponent},
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
