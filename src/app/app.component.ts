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

  // heroes: any[];

  constructor(private dataService: DataService) {}

  getHeroes(){
    this.dataService.getHeroes().subscribe(
      result => {
      console.log(result),
      this.heroes=Object.values(result),
      console.log(this.heroes)});
  }

  ngOnInit(){
    this.getHeroes();
  }
}
