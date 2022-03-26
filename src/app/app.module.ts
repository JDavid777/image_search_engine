import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { BasicModule } from './basic_module/basic.module';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { AppRouterModule } from './routes/router.module';
import { ModalComponent } from './components/modal/modal.component';
import { StarComponent } from './components/icons/star/star.component';
import { TagComponent } from './components/icons/tag/tag.component';
import { EyeComponent } from './components/icons/eye/eye.component';
import { DownloadComponent } from './components/icons/download/download.component';
import { UserComponent } from './components/icons/user/user.component';

@NgModule({
  declarations: [AppComponent, MainComponent, CardComponent, SearchComponent, ModalComponent, StarComponent, TagComponent, EyeComponent, DownloadComponent, UserComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
    BasicModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
