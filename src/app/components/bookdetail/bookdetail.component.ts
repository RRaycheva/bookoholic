import { Component, OnInit } from '@angular/core';
import { BookResource } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookDetailComponent {
  book = new Book();

  constructor(
    private service: BookResource
  ) { }

  save(): void {
    this.service.createBook(this.book)
      .subscribe();
  }
}
