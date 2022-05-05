import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  total = 0;
  url = 'http://34.77.23.202/Home/Post/';
  row = [
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      modelNo: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      modelNo: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      modelno: '',
    },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.row[0].id = 'CJDarcl';
    this.row[1].id = 'CjDarcl';
    this.row[2].id = 'CjDarcl';
  }

  addTable() {
    console.log(this.row.length);
    const obj = {
      id: '',
      name: '',
      price: '',
      quantity: '',
      modelNo: '',
    };

    this.row.push(obj);
    this.row[this.row.length - 1].id = 'CjDarcl';
  }

  deleteRow(x) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }

  addOrder() {
    const resp = this.http.post(this.url, this.row).subscribe(
      (response) => {
        console.log(response);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
