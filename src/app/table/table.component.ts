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
      quantity: null,
      modelno: '',
      editmode: true,
    },
   
  ];

  State: any = [
    { id: 1, name: "001 TATA LSM" },
    { id: 2, name: "002 Mahindra SSDJ" },
    { id: 3, name: "003 Ashok DSNG" }
  ]

  City: any = [
    { id: 1, name: "LSM Full Load", state: 1 },
    { id: 2, name: "LSM BIO LOAD", state: 1 },
    { id: 3, name: "LSM FMCG", state: 1 },
    { id: 4, name: "SSDJ Bulk", state: 2 },
    { id: 5, name: "SSDJ Light", state: 2 },
    { id: 6, name: "DSNG BUlK", state: 3 },
    { id: 7, name: "DSNG Light 2", state: 3 }
  ]

  selectedState : any = "";
  selectedCity : any = "";
  //I've taken another Variable to bind city dropdown after filter. If I used same
  // Variable, after second filter my city dropdown will not contains all values and 
  // Data will be null

  dropdownCity: any = [];

  populateCity(value) {
    this.dropdownCity = this.City.filter(i => i.state == value);
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.row[0].id = 'CJDarcl';
    this.row[0].name = 'test';
    this.row[0].quantity = 3;
    this.row[0].price="test"
    this.row[0].modelno = 'DSNG BUlK';

    this.row[0].editmode = false;

     }

  editRow(index, data) {
    if (this.row[index].id===''||
    this.row[index].name===''||
    this.row[index].price===''||
    this.row[index].quantity===''||
    this.row[index].modelno===''){
      alert("Enter All Fields")
    }else{

      if (this.row[index].editmode === true) {
        this.row[index].editmode = false;
        this.row[index] = data;
      } else {
        this.row[index].editmode = true;
        this.row[index] = data;
      }
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
