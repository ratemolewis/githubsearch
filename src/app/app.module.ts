import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import{HttpModule} from '@angular/http';
import{UserService} from './service/user.service';
import { UnderlineDirective } from './underline.directive'


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
