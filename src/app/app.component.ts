import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TitleComponent } from './components/title/title.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'angular_leanrning';
}
