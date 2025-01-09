import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TitleComponent } from './components/title/title.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkSignalComponent } from './components/link-signal/link-signal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LinkSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'angular_leanrning';
}
