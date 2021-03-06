import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  zoom: number = 11;
  
  // initial center position for the map
  lat: number = 30.3165;
  lng: number = 78.0322;
  name="Dit University"
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
 
  
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  labelOptions = {
    color: 'green',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Some Text',
    backgroundcolor:'green'
    }

}
