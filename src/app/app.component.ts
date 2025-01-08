import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TitleComponent } from './components/title/title.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdminComponent,TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'angular_leanrning';
}
