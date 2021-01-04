import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { ProductgridComponent } from './components/productgrid/productgrid.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookResource } from './services/book.service';
import { UserService } from './services/user.service';
import { AuthorService } from './services/author.service';
import { GenreService } from './services/genre.service';
import { BookDetailComponent } from './components/bookdetail/bookdetail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BestsellerComponent,
    ProductgridComponent,
    BannerComponent,
    HomepageComponent,
    BooksListComponent,
    BookDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookResource, UserService, AuthorService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
