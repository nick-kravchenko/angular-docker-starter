import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  @Input() test: [] = [];

  sort = 'id';
  dir = 'asc';

  @Input() keys: [];
  @Input() values = [];

  constructor() { }

  ngOnInit() {
  }

  getNested(row, key) {
    let value = row;
    while (key.length > 0) {
      value = value[key.shift()]
    }
    return value;
  }
  
  getValue(row, k) {
    let value = '';
    
    if (!/\./u.test(k.key)) {
      value = row[k.key];
    } else {
      value = this.getNested(row, k.key.split('.'));
    }
    return k.format(value);
  }

  sortValues(k) {
    if (this.sort === k) {
      this.dir = this.dir === 'asc' ? 'desc' : 'asc';
    }
    this.sort = k;
  }

  sortedValues() {
    let k = this.keys.find((key) => {
      return key['key'] === this.sort;
    });
    return this.values.sort((a, b) => {
      a = this.getValue(a, k);
      b = this.getValue(b, k);
      
      if (this.dir === 'asc') {
        return a > b ? -1 : 1;
      } else {
        return a < b ? -1 : 1;
      }
    });
  }
}
