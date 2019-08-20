import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BiglistComponent } from './biglist/biglist.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	AnimeDetailsComponent,
	SignupComponent,
	LoginComponent,
	AboutComponent,
	BiglistComponent,
	NavComponent,
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
