import { Component, OnInit } from '@angular/core';
declare let map,ol,app,d3, $ ,layer,london ,OpenLayers,base_layer,view,value, visible,satellite, osm;
@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

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
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    })
  
    document.getElementById("button").addEventListener("click", function( event ) {
      
      var x = parseFloat(document.getElementById('x').value)
      var y = parseFloat(document.getElementById('y').value)
     
    
    
       
     var feature = new ol.Feature({
       
        geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:4326',     
        'EPSG:3857'))
      })
      var vectorSource = new ol.source.Vector({
        features: [feature]
      })
      var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
      })
      map.addLayer(vectorLayer)
    }, false)










/*
var london = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:4326',     
  'EPSG:3857'))


});




london.setStyle(new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions}  ({
    color: '#4271AE',
    crossOrigin: 'anonymous',
    src: 'https://openlayers.org/en/v4.6.5/examples/data/dot.png'
  }))
}));




var vectorSource = new ol.source.Vector({
  features: [london]
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

var rasterLayer = new ol.layer.Tile({
  source: new ol.source.TileJSON({
    url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
    crossOrigin: ''
  })
});
*/


  }

  }


