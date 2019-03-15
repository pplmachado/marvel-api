import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataService } from './data.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit{
  title = 'MarvelTest';

  @Input('result') heroes: any[] = [];
    page: number = 1;
    userFilter: any = { name: '' };

  constructor(private dataService: DataService) {}

  getHeroes(){
    this.dataService.getHeroes().subscribe(
      result => {this.heroes=Object.values(result)}
    );
  }

  ngOnInit(){
    this.getHeroes();
  }
}
