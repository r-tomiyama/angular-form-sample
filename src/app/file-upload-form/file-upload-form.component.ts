import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FileUploadFormComponent implements OnInit {
  readonly acceptedTypes = ['image/png', 'image/jpeg', 'image/gif'];
  readonly validators = [Validators.required];

  @ViewChild('fileInput') fileInput?: ElementRef;
  formGroup: FormGroup = this.formBuilder.group({
    files: this.formBuilder.array([], this.validators),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  get files(): FormArray {
    return this.formGroup.get("files") as FormArray;
  }

  ngOnInit() {
    // TODO
  }

  dragOver(event:DragEvent){
    event.preventDefault(); // ブラウザで画像を開かないようにする
  }

  dropFiles(event: DragEvent){
    event.preventDefault(); // ブラウザで画像を開かないようにする
    if(this.fileInput && event.dataTransfer) {
      this.fileInput.nativeElement.files = event.dataTransfer.files;
      this.changeFiles(event.dataTransfer.files);
    }
  }

  openFileSelectDialog() {
    if(this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  inputFiles(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if(inputElement.files) {
      this.changeFiles(inputElement.files);
    }
  }

  uploadFiles() {
    // TODO
    console.log('upload files')
    console.log(this.files.value)
  }

  private changeFiles(fileList: FileList) {
    const formArray = this.formBuilder.array(Array.from(fileList), this.validators);
    this.formGroup.setControl('files', formArray);
  }

}
