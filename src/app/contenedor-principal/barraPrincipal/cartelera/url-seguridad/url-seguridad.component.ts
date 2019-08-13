import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';

@Component({
  selector: 'app-url-seguridad',
  templateUrl: './url-seguridad.component.html',
  styleUrls: ['./url-seguridad.component.css']
})
export class UrlSeguridadComponent implements OnInit {
@Input()url:string;
safe:SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    
  }

}
