import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-service.service';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckService } from './deck-service.service'
 
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DeckListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }