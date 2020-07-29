import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    photos: Photo;

    constructor(private http: HttpClient) { }

    listFromUser(search: string, page: number) {            
        return this.http.get<Photo>
            ('https://pixabay.com/api/?key=17511537-fb5903c9dd15ed739797b3ea8&q=' + search +
                '&page=' + page + '&per_page=12');
    }
}