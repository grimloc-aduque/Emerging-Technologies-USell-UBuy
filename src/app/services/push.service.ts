import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import OneSignal from 'onesignal-cordova-plugin';
import { OpenedEvent } from 'onesignal-cordova-plugin/types/Notification';
import { DeviceState } from 'onesignal-cordova-plugin/types/Subscription';
import { Producto } from '../interfaces/producto';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  constructor(
    private http: HttpClient, 
    private dataService: DataService,
    private router: Router) { }

  userId: string

  // Call this function when your app starts
  configInicial(){
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId('3d313fd5-cdfe-4e50-b4f5-78b6beea8e3d');

    OneSignal.setNotificationOpenedHandler((noti) => {
      console.log('Notificacion abierta', noti);

      this.notificacionRecibida(noti);
    });

    // iOS - Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse((noti) => {
      console.log('Notificacion abierta en IOS', noti);
    });
  }

  obtenerUsuario(){
    OneSignal.getDeviceState(
      (respuesta:DeviceState) => {
        this.userId = respuesta.userId;
        console.log(respuesta);
        console.log('Dispositivo: ', this.userId)
      }
    )
  }


  enviarNotificacionReserva(producto:Producto){
    const nombre_producto = producto.nombre
    this.dataService.getUsuarioById(producto.id_vendedor).subscribe(
      vendedor => {
        const push_id = vendedor.data().push_id

        const headers = {
          "Content-Type": "application/json; charset=utf-8"
        }

        const options = {
          host: "onesignal.com",
          port: 443,
          path: "/api/v1/notifications",
          method: "POST",
          headers: headers
        };

        const body = { 
          app_id: "3d313fd5-cdfe-4e50-b4f5-78b6beea8e3d",
          headings: {"en": "Producto Reservado"},
          contents: {"en": `Tu producto ${nombre_producto} fue reservado. Ponte en contacto con el interesado para acordar la venta`},
          include_player_ids: [push_id],
          data: {"id_producto": producto.uid, "id_comprador": producto.id_comprador}
        };
    
        this.http.post('https://onesignal.com/api/v1/notifications', body, options).subscribe(
          res => console.log(res)
        );
      }
    )
  };

  notificacionRecibida(noti:OpenedEvent){
    console.log(noti)
    const id_comprador = noti.notification.additionalData['id_comprador']
    const id_producto = noti.notification.additionalData['id_producto']
    this.router.navigateByUrl(`/perfil-reserva/${id_comprador}/${id_producto}`);
  }

}
