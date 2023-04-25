import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { PeopleService } from './people.service';
import { TableData } from '../table-data';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isLoading = true;
  rows!: { [key: string]: any }[];
  readonly columns: TableData[] = [
    {
      Header: 'First Name',
      PropName: 'firstName'
    },
    {
      Header: 'Last Name',
      PropName: 'lastName'
    },
    {
      Header: 'Birthday',
      PropName: 'birthday'
    }
  ];

  constructor(private service: PeopleService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.service.fetch().subscribe(value => {
      this.rows = value;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

}
