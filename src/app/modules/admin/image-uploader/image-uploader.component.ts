import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent {
  thumbnails: (string | ArrayBuffer | null)[] = [];
  savedFiles: File[] = [];

  @ViewChild('fileInput') fileInput!: ElementRef;

  onFilesSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;

    if (!files || this.thumbnails.length + files.length > 6) {
      alert('You can upload a maximum of 6 images');
      return;
    }

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.thumbnails.push(e.target?.result as string | ArrayBuffer | null);
        this.savedFiles.push(file);
      };

      reader.readAsDataURL(file);
    });


  }

  removeImage(index: number) {
    this.thumbnails.splice(index, 1);
    this.savedFiles.splice(index,1);
  }
  getFiles(): File[] {
    return this.savedFiles;
  }
}
