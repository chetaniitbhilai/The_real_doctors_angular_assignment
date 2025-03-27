import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>People List</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 8px;">Name</th>
            <th style="text-align: left; padding: 8px;">Email</th>
            <th style="text-align: left; padding: 8px;">Phone</th>
            <th style="text-align: left; padding: 8px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let person of people">
            <td style="padding: 8px;">{{person.name}}</td>
            <td style="padding: 8px;">{{person.email}}</td>
            <td style="padding: 8px;">{{person.phone}}</td>
            <td style="padding: 8px;">
              <button class="btn btn-primary" [routerLink]="['/edit', person.id]">Edit</button>
              <button class="btn btn-danger" [routerLink]="['/delete', person.id]">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    });
  }
}