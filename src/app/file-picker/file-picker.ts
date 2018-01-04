import {
    Component, OnInit, Input,
    ElementRef, ViewChild, ChangeDetectorRef,
    ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoaderService } from 'meepo-loader';
import { Meepo } from 'meepo-base';
declare const navigator: any;
@Component({
    selector: 'file-picker',
    templateUrl: './file-picker.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./file-picker.scss']
})
export class FilePickerComponent extends Meepo {
    mediaConstraints: any = {
        video: true,
        audio: true
    };

    @Input() mimeType: string = 'image/gif';
    @Input() timeInterval: number = 5;

    @ViewChild('video') video: ElementRef;
    blob: any;
    gifSrc: any = '';
    type: string;
    name: string;

    constructor(
        public loader: LoaderService,
        public cd: ChangeDetectorRef,
        public dom: DomSanitizer
    ) {
        super();
    }

    ngOnInit() { }

    ondataavailable(blob) {
        this.blob = blob;
        this.name = blob.name || '';
        this.type = blob.type.split('/')[0];
        console.log(this.type);
        let gifSrc = URL.createObjectURL(this.blob);
        this.gifSrc = this.dom.bypassSecurityTrustResourceUrl(gifSrc);
        this.cd.detectChanges();
    }

    choosePhoto(e: any) {
        e.preventDefault();
        let files: any[] = [];
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        let file = files[0];
        this.ondataavailable(file);
    }

    cancel() { }

    sure() { }
}