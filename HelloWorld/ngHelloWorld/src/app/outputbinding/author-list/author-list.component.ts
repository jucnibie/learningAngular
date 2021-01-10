import {Component, OnInit} from '@angular/core';
import {authors, Author} from '../authors';
import {element} from 'protractor';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];

  // Change current author into selected author
  onSelected(selectedAuthor: Author): void {
    this.currentAuthor = selectedAuthor;
  }

  // Handle author selected to delete from array authors
  onDelete(id: number): void {
    this.authors = this.authors.filter(item => {
      return item.id !== id;
    });

    // Change current author into first author in list, when choose current author to delete
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
