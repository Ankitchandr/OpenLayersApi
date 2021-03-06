import { Component, OnInit } from '@angular/core';
declare let ol,Map;
@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    // comment the following two lines to have the mouse position
    // be placed within the map.
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
  });

  var map = new ol.Map({
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: false
      }
    }).extend([mousePositionControl]),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });

   var projectionSelect = document.getElementById('projection');
  projectionSelect.addEventListener('change', function(event) {
    mousePositionControl.setProjection(event.target.value);
  });

 var precisionInput = document.getElementById('precision');
  precisionInput.addEventListener('change', function(event) {
    var format = ol.coordinate.createStringXY(event.target.valueAsNumber);
    mousePositionControl.setCoordinateFormat(format);
  });
}

}
