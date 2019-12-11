import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarSelectorComponent } from './components/calendar-selector/calendar-selector.component';
import { CalendarOrganizerComponent } from './components/calendar-organizer/calendar-organizer.component';
import { CalendarActionsComponent } from './components/calendar-actions/calendar-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarSelectorComponent,
    CalendarOrganizerComponent,
    CalendarActionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
