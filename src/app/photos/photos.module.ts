import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CommonModule } from '@angular/common';
import { CardModule } from '../shared/components/card/card.module';


@NgModule({   
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule { }