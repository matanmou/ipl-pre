import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { IplPreComponent } from './ipl-pre/ipl-pre.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { BottomComponent } from './bottom/bottom.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ModalModule } from 'ngx-bootstrap';
import { LogoOnlyComponent } from './logo-only/logo-only.component';


@NgModule({
  declarations: [
    AppComponent,
    IplPreComponent,
    MenuComponent,
    HomeComponent,
    NewsComponent,
    BottomComponent,
    TeamListComponent,
    LogoOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ModalModule.forRoot()
  ],
  entryComponents:[TeamListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
