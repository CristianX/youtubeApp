import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyD5wTzf1Z4NxXnoBProcNvfvcwKBJ8VQ1A';
  private playlistId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor( public http: HttpClient ) {}

  getVideos() {
    const url = `${ this.youtubeUrl }/playlistItems?part=snippet&maxResults=16&playlistId=UU1TaReAPiLPy1dyHopzlaqA&key=${ this.apiKey}`;
    const url2 = `${ this.youtubeUrl }/playlistItems`;
    const paramsString = new HttpParams({
      fromString: `part=snippet&
                    maxResults=10&
                    playlistId=${this.playlistId}&
                    key=${this.apiKey}`
    });

    const paramsObject = new HttpParams({
      fromObject: {
        part: 'snippet',
        maxResults: '10',
        playlistId: this.playlistId,
        key: this.apiKey,
      }
    });

    if ( this.nextPageToken ) {
      paramsObject.set( 'pageToken', this.nextPageToken );
    }

    return this.http.get( url2, {params: paramsObject})
            .pipe(map((res: any) =>  res ));
  }
}
