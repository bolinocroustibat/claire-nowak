import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ConfirmPage } from '../confirm/confirm';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		private _camera: Camera,
		private _toastCtrl: ToastController
	) { }

	choosePicture() {
		const options: CameraOptions = {
			quality: 80,
			// targetWidth: 1200,
			// targetHeight: 1600,
			destinationType: this._camera.DestinationType.DATA_URL,
			encodingType: this._camera.EncodingType.JPEG,
			mediaType: this._camera.MediaType.PICTURE,
			sourceType: this._camera.PictureSourceType.PHOTOLIBRARY,
			correctOrientation: true
		}
		this._camera.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.navCtrl.push(ConfirmPage, { image: imageData });
			}, (err) => {
				// Handle error
				let toast = this._toastCtrl.create({
					message: "Erreur, avez-vous bien une galerie de photos sur votre téléphone ?",
					duration: 3000,
					position: 'top'
				});
				toast.present();
			});
	}

	takePicture() {
		const options: CameraOptions = {
			quality: 80,
			targetWidth: 1200,
			targetHeight: 1600,
			destinationType: this._camera.DestinationType.DATA_URL,
			encodingType: this._camera.EncodingType.JPEG,
			mediaType: this._camera.MediaType.PICTURE,
			correctOrientation: true
		}
		this._camera.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64 (DATA_URL): let base64Image = 'data:image/jpeg;base64,' + imageData;
				this.navCtrl.push(ConfirmPage, { image: imageData });
			}, (err) => {
				// Handle error
				let toast = this._toastCtrl.create({
					message: "Erreur, avez-vous bien un appareil photo sur votre téléphone ?",
					duration: 3000,
					position: 'top'
				});
				toast.present();
			}
		);
	}

}
