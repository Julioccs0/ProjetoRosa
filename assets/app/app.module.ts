import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageListComponent } from './messages/message-list.component';
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent } from './messages/message-input.component'
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { myrouting } from './app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { HeaderComponent } from './header/header.component';
import { MangaComponent } from './manga/manga.component';
import { CreateComponent } from './manga/create.component';
import { MangaList } from './manga/list-component';
import { LivroComponent } from './manga/livro-component';
import { ReservaComponent } from './manga/reserva-component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        MangaComponent,
        CreateComponent,
        MangaList,
        LivroComponent,
        ReservaComponent
    ],
    imports: [BrowserModule, FormsModule, myrouting, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}