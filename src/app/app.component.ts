import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Book {
  id: number;
  name: string;
  title: string;
  author: string;
  cost: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  dataSource$: Observable<Book[]>;
  displayedColumns: string[] = ['id', 'name', 'author', 'type', 'cost'];
  booksUrl = 'http://localhost:3000/books';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = fb.group({
      author: [null],
      type: [null],
      cost: [null]
    });
  }

  ngOnInit(): void {
    this.fetchData(null);
  }

  onSearch(form: NgForm) {
    let key = '';
    Object.keys(form).forEach((data) => {
      key = key + data + '=' + form[data] + '&';
    });
    this.fetchData(key);
  }

  fetchData(key?): void {
    this.dataSource$ = this.http.get<Book[]>(`${this.booksUrl}?${key}`);
  }

  onClear(event: any, form: FormGroupDirective): void {
    event.preventDefault();
    this.fetchData(null);
    this.searchForm.reset();
    form.resetForm();
  }
}
