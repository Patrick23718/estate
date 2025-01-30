import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
    selector: 'app-map',
    imports: [GoogleMapsModule],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit, OnInit {

  zoom = 15; // Zoom de la carte
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 }; // Centre par défaut
  markerPosition: google.maps.LatLngLiteral | null = null; // Position du marqueur
  errorMessage: string | null = null;
  markerPositions: google.maps.LatLngLiteral[] = []; // Liste des positions des marqueurs
  // Tableau de marqueurs
  markers: Array<{ position: google.maps.LatLngLiteral; title: string; icon: string; animation: number }> = [];
  mapType: google.maps.MapTypeId = google.maps.MapTypeId.TERRAIN;

  constructor() {
  }

  ngOnInit(): void {
    this.loadMarkers();
  }

  ngAfterViewInit(): void {
    this.getUserLocation();
  }

  display: any;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.markerPositions.push({ lat, lng });
      console.log(`Nouveau marqueur ajouté : Latitude ${lat}, Longitude ${lng}`);
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  // Récupérer la position actuelle de l'utilisateur
  getUserLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.center = { lat: latitude, lng: longitude }; // lat: 46.105959, lng: -64.789526 université de Moncton
          this.markerPosition = { lat: latitude, lng: longitude };
          this.markers.push({
            position: { lat: latitude, lng: longitude },
            title: 'Me',
            icon: 'images/home2.png',
            animation: google.maps.Animation.BOUNCE,
          });
        },
        (error) => {
          this.errorMessage = "Impossible d'obtenir votre position. Vérifiez vos permissions.";
          console.error('Erreur de géolocalisation :', error);
        }
      );
    } else {
      this.errorMessage = "La géolocalisation n'est pas supportée par ce navigateur.";
      console.error(this.errorMessage);
    }
  }

  loadMarkers(): void {
    // Exemple de données locales
    const data = [
      { lat: 4.06053512458218, lng: 9.704967930102532, title: 'Paris' },
      { lat: 4.063446037345413, lng: 9.714538051867668, title: 'Tour Eiffel' },
      { lat: 4.063232, lng: 9.7124352, title: 'Louvre' },
    ];

    // Ajouter les marqueurs au tableau
    this.markers = data.map((item) => ({
      position: { lat: item.lat, lng: item.lng },
      title: item.title,
      icon: 'images/home2.png',
      animation: google.maps.Animation.BOUNCE,
    }));
  }

  toggleBounce(marker: any) {
    marker.animation = marker.animation ? null : google.maps.Animation.BOUNCE;
  }
}
