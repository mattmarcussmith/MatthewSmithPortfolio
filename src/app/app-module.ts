import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { ProjectDetail } from './sections/project-detail/project-detail';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';

@NgModule({
  declarations: [
    App,
    Header,
    Hero,
    About,
    ProjectDetail,
    Education,
    Contact
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    App
  ]
})
export class AppModule {
}
