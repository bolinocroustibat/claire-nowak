import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfirmPage } from '../pages/confirm/confirm';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ConfirmPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ConfirmPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		EmailComposer,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
