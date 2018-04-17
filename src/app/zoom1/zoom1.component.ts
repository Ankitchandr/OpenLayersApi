import { Component, OnInit } from '@angular/core';
declare let map,ol,app,d3, $ ,layer,london ,view, visible,satellite, osm;
@Component({
  selector: 'app-zoom1',
  templateUrl: './zoom1.component.html',
  styleUrls: ['./zoom1.component.css']
})
export class Zoom1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }),
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    });
  
    document.getElementById('zoom-out').onclick = function() {
      var view = map.getView();
      var zoom = view.getZoom();
      view.setZoom(zoom - 1);
    };
  
    document.getElementById('zoom-in').onclick = function() {
      var view = map.getView();
      var zoom = view.getZoom();
      view.setZoom(zoom + 1);
    };
  }

}
