import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { Photo } from '../photo/photo';
import { Hits } from '../photo/hits';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo;
  hits: Hits[] = [];
  filter: string = '';
  FilterByDescription: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  search: string = '';

  constructor(private PhotoService: PhotoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.search = this.activatedRoute.snapshot.params.image;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.hits = this.photos.hits;
  }

  load(): void {      
    this.PhotoService.listFromUser(this.search, this.currentPage++).subscribe(photos => {      
      this.photos = photos;
      this.hits = this.hits.concat(this.photos.hits);
      if (!photos.hits.length) {
        this.hasMore = false;
      }
    });
  }
}