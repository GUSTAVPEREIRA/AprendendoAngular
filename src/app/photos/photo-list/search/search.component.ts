import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


import { Photo } from '../../photo/photo';
import { Hits } from '../../photo/hits';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  debounce: Subject<string> = new Subject<string>();
  photos: Photo;
  hits: Hits[] = [];
  filter: string = '';
  search: string = '';
  @Output() onTyping = new EventEmitter<string>();
  @Input() filterValue: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {        
    this.search = this.activatedRoute.snapshot.params.image;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.hits = this.photos.hits;
    this.debounce
      .pipe(debounceTime(400))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  //Quando não é chamado o debounce . complete e necessario escrever isso para limpar a memória.
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}