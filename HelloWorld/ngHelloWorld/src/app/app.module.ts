import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { DataEventBindingComponent } from './data-event-binding/data-event-binding.component';
import { ControlSomethingComponent } from './control-something/control-something.component';
import { LoopComponent } from './loop/loop.component';
import { InputbindingComponent } from './inputbinding/inputbinding.component';
import { AuthorListComponent } from './outputbinding/author-list/author-list.component';
import { AuthorDetailComponent } from './outputbinding/author-detail/author-detail.component';
import { CustomTwowayBindingComponent } from './custom-twoway-binding/custom-twoway-binding.component';
import { ToggleComponent } from './custom-twoway-binding/toggle/toggle.component';
import { SummaryPipe } from './summary.pipe';
import { NgtemplatengcontainerComponent } from './ngtemplatengcontainer/ngtemplatengcontainer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataEventBindingComponent,
    ControlSomethingComponent,
    LoopComponent,
    InputbindingComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    CustomTwowayBindingComponent,
    ToggleComponent,
    SummaryPipe,
    NgtemplatengcontainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
