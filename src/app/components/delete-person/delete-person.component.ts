import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-delete-person',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Delete Person</h2>
      <div *ngIf="person">
        <p>Are you sure you want to delete {{person.name}}?</p>
        <button class="btn btn-danger" (click)="confirmDelete()">Yes, Delete</button>
        <button class="btn btn-primary" routerLink="/">Cancel</button>
      </div>
    </div>
  `
})
export class DeletePersonComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPerson(id).subscribe(person => {
      this.person = person;
    });
  }

  confirmDelete() {
    if (this.person) {
      this.peopleService.deletePerson(this.person.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}