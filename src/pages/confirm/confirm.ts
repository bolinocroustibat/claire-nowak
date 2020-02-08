import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
	selector: 'page-confirm',
	templateUrl: 'confirm.html',
})
export class ConfirmPage {

	imageData: string;
	base64Image: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _emailComposer: EmailComposer,
		private _toastCtrl: ToastController
	) {
		this.imageData = navParams.get("image");
		this.base64Image = 'data:image/jpeg;base64,' + navParams.get("image");
	}

	cancel() {
		this.navCtrl.popToRoot();
	}

	sendMail() {
		this._emailComposer.open({
			to: "clairenowak@gmail.com",
			cc: null,
			bcc: null,
			attachments: ['base64:arbre.jpeg//' + this.imageData],
			subject: "Claire Nowak, merci d'identifier cet arbre",
			body: "Bonjour Claire Nowak, pouvez-vous identifier cet arbre en pièce jointe et revenir vers moi rapidement. Merci",
			isHtml: false
		}).catch((error: any) => {
			//this.navCtrl.popToRoot();
			let toast = this._toastCtrl.create({
				message: "Erreur, l'email à Claire Nowak n'a pas pu être envoyé. Avez-vous une application d'e-mail sur votre téléphone ?",
				duration: 3000,
				position: 'top'
			});
			toast.present();
		});
	}

}
