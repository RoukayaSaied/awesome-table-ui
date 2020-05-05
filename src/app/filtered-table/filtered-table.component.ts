import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CUSTOMER} from '../../core/models/CUSTOMER';

@Component({
  selector: 'app-filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.scss']
})
export class FilteredTableComponent implements OnInit {
  dataSource: MatTableDataSource<CUSTOMER>;
  displayedColumns: string[] = ['name', 'description', 'rate', 'balance', 'deposit', 'status', 'actions'];
  customers: [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CUSTOMER>();
    this.dataSource.data = this.customers;
    this.dataSource.paginator = this.paginator;
  }

}
