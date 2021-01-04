import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Array<Book> = [
    {
      "id": 1,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    },
    {
      "id": 2,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    }, {
      "id": 3,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    }, 
    {
      "id": 4,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    }
    , {
      "id": 5,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    }, {
      "id": 6,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята"
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
