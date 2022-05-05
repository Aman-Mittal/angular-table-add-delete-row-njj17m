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
      name: 'test',
      price: '',
      quantity: '',
      modelno: '',
      editmode: true,
    },
 
    
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.row[0].id = 'CJDarcl';
    this.row[0].name = 'test';
    this.row[0].quantity = 'Two Wheeler';
    this.row[0].price="0"
    this.row[0].modelno = 'test';

    this.row[0].editmode = false;

     }

  editRow(index, data) {
    if (this.row[index].editmode === true) {
      this.row[index].editmode = false;
      this.row[index] = data;
    } else {
      this.row[index].editmode = true;
      this.row[index] = data;
    }
  }

  addTable() {
    console.log(this.row.length);
    const obj = {
      id: '',
      name: '',
      price: '',
      quantity: '',
      modelno: '',
      editmode: false,
    };

    this.row.push(obj);
    this
    this.row[this.row.length - 1].editmode = true;
   
    

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
