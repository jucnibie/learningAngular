import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() author: Author;
  @Output() selectme = new EventEmitter<Author>();
  @Output() deleteme = new EventEmitter<number>();
  // Using EventEmitter to emit this item to parent component

  // Emit this author to author-list.component
  handleDelete(): void {
    this.deleteme.emit(this.author.id);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
