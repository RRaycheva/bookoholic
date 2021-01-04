import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookResource {
  
  constructor(private http: HttpClient)
   { }

  createBook(book: Book): Observable<void> {
    return this.http.post<void>('api/Books', book);
  };

  getAllBooks(): Observable<Book[]>{
    return this.http.get('../data/books.json').pipe(
      map(data=>{
        const booksArray:Array<Book>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            booksArray.push(data[id]);
          }
        }
        return booksArray;
      })
    );
  };
   
}
