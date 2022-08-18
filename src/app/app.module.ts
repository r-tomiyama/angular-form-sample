import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { MatFormComponent } from './mat-form/mat-form.component';
import { TemplateReferenceFormComponent } from './template-reference-form/template-reference-form.component';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    NameEditorComponent,
    MatFormComponent,
    TemplateReferenceFormComponent,
    FileUploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
