import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { SignalComponent } from './components/signal/signal.component';
import { TitleComponent } from './components/title/title.component';
import { UserComponent } from './components/user/user.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReacticeFormComponent } from './components/reactice-form/reactice-form.component';
import { ApiCall1Component } from './components/api-call1/api-call1.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
export const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'controlFlow', component: ControlFlowComponent },
    { path: 'dataBinding', component: DataBindingComponent },
    { path: 'linkSignal', component: DataBindingComponent },
    { path: 'ngClass', component: NgClassComponent },
    { path: 'ngFor', component: NgForComponent },
    { path: 'ngIf', component: NgIfComponent },
    { path: 'signal', component: SignalComponent },
    { path: 'title', component: TitleComponent },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    {path:'templateForm',component:TemplateFormComponent},
    {path:'reactiveForm',component:ReacticeFormComponent},
    {path:'apiCall1',component:ApiCall1Component},
    {path:'lifeCycle',component:LifeCycleComponent},
    {path:'inputOutput',component:InputOutputComponent}
    
  ];
  