import { Hits } from './hits';

export interface Photo {
    total: number,
    totalHits: number,
    hits: Hits[]
}