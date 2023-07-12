import { User } from './User';
import { Company } from './Company';

interface Marker {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId) as HTMLElement;
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: Marker): void {
    const googleMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.long,
      },
    });

    googleMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent(),
      });
      infoWindow.open(this.googleMap, googleMarker);
    });
  }
}
