import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

// Poder usar el signo de dolar en typescript
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSel: any;

  constructor( public _yts: YoutubeService ) {
    this._yts.getVideos().subscribe( videos => {
      console.log(videos);
      this.videos = videos.items;
      console.log(this.videos);
    } );
  }

  ngOnInit(): void {
  }

  verVideo( video: any ) {
    this.videoSel = video;
    $('#myModal').modal('show');
  }

}
