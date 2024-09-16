import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  public async ngOnInit() {

    const map = new Map({
      basemap: 'satellite'
    });

    const view = new MapView({
      container: 'container',
      map: map,
      zoom: 8,
      center: [106.155964, -1.881224] // Pusatkan di sekitar lokasi tambang
    });

    // Data koordinat tambang dengan penyesuaian lokasi agar di daratan
    const tambang = [
      // Pasir Kwarsa
      { type: 'Pasir Kwarsa', latitude: -1.880224, longitude: 106.155964, color: [210, 180, 140] }, // Sedikit koreksi posisi di darat
      { type: 'Pasir Kwarsa', latitude: -1.987719, longitude: 106.067724, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -1.878264, longitude: 106.041058, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -1.712956, longitude: 105.885110, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -1.794857, longitude: 106.211349, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -1.600351, longitude: 106.016378, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -1.823678, longitude: 106.180256, color: [210, 180, 140] },
      { type: 'Pasir Kwarsa', latitude: -2.010457, longitude: 106.245799, color: [210, 180, 140] }, // Koreksi posisi lebih ke daratan

      // Batu Granit
      { type: 'Batu Granit', latitude: -1.853286, longitude: 106.128733, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -1.575866, longitude: 105.746354, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -2.265416, longitude: 105.825592, color: [0, 255, 0] }, // Penyesuaian
      { type: 'Batu Granit', latitude: -1.793578, longitude: 105.837343, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -1.877836, longitude: 106.048177, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -1.860123, longitude: 106.232423, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -1.680125, longitude: 106.002123, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -2.133678, longitude: 105.932344, color: [0, 255, 0] },
      { type: 'Batu Granit', latitude: -1.902345, longitude: 106.176543, color: [0, 255, 0] },

      // Tanah Uruk
      { type: 'Tanah Uruk', latitude: -1.975908, longitude: 106.122349, color: [255, 255, 0] },
      { type: 'Tanah Uruk', latitude: -1.776891, longitude: 106.070746, color: [255, 255, 0] },
      { type: 'Tanah Uruk', latitude: -1.565260, longitude: 105.990467, color: [255, 255, 0] },
      { type: 'Tanah Uruk', latitude: -1.625478, longitude: 106.003489, color: [255, 255, 0] },
      { type: 'Tanah Uruk', latitude: -1.739021, longitude: 106.145682, color: [255, 255, 0] },
      { type: 'Tanah Uruk', latitude: -2.044321, longitude: 106.197854, color: [255, 255, 0] }, // Koreksi posisi lebih di darat
      { type: 'Tanah Uruk', latitude: -1.895432, longitude: 106.078956, color: [255, 255, 0] },

      // Tanah Merah
      { type: 'Tanah Merah', latitude: -2.266542, longitude: 105.947529, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -1.870801, longitude: 106.038647, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -1.724560, longitude: 105.882564, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -2.046432, longitude: 106.064781, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -1.679021, longitude: 106.143289, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -2.116908, longitude: 105.998431, color: [255, 0, 0] },
      { type: 'Tanah Merah', latitude: -1.976541, longitude: 106.111534, color: [255, 0, 0] }
    ];

    // Fungsi untuk menambahkan marker ke peta
    tambang.forEach((titik) => {
      const point = new Point({
        longitude: titik.longitude,
        latitude: titik.latitude
      });

      const markerSymbol = new SimpleMarkerSymbol({
        color: titik.color, // Warna berdasarkan jenis tambang
        outline: {
          color: [255, 255, 255], // Outline berwarna putih
          width: 1
        },
        size: '15px' // Ukuran marker
      });

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      });

      view.graphics.add(pointGraphic);
    });
  }
}
