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
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    },
    {
      "id": 2,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    }, {
      "id": 3,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    },
    {
      "id": 4,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    }
    , {
      "id": 5,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    }, {
      "id": 6,
      "title": "Книга за песните",
      "author": "Стефан Вълдобрев",
      "genre": "Автобиография",
      "publisher": "Книгомания",
      "description": "Песента беше написана, изсвирена, почти изпята",
      "imgPath": "assets/img/stefan-vyldobrev-kniga-za-pesnite-9786191952601.jpg"
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
