import { Component, TemplateRef } from '@angular/core';
import { environment } from '../environments/environment';
import axios from "axios";
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-intel';
  typeFilter= '';
  search = '';
  lang= '';
  dataSource;
  //modalRef: BsModalRef;
  image: any;

  constructor(private mensagesService: MessagesService){

  }

  ngOnInit() {
    this.loadData();
  }

  applyFilter() {
    this.typeFilter = '';
    this.loadData();
  }

  listFilter(type) {
    this.search = '';
    this.typeFilter = type;
    this.loadData();
  }

  loadData() {
    let self = this;
    axios.get(environment.api, {
      params: {
        lang: this.lang,
        q: this.search,
        category: this.typeFilter
      }
    })
      .then((response) => {
        self.dataSource = response.data.data.hits;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  openModal(image: string, tags: string, views:string, likes:string){
    this.mensagesService.alert(image, tags, views, likes).subscribe((answer) => {

    });
  }
}
