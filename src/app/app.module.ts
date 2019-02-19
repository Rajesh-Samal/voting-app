import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OptionsComponent } from './addoptions/options.component';
import { CastVoteComponent } from './castvote/castvote.component';
import { ResultComponent }  from './result/result.component';

import { ChartsModule } from 'ng2-charts';
import { VotechartComponent } from './votechart/votechart.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    CastVoteComponent,
    ResultComponent,
    VotechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
