import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { PeopleListComponent } from './app/components/people-list/people-list.component';
import { EditPersonComponent } from './app/components/edit-person/edit-person.component';
import { DeletePersonComponent } from './app/components/delete-person/delete-person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'People Management';
}

const routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});