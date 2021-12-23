import { Component, OnInit } from '@angular/core';
import { PostchangeService } from '../postchange.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  getdata: any[''];
  postdata: any;
  hey = '';
  constructor(private service: PostchangeService) {
  }

  ngOnInit() {
    this.service.getpostchanges().subscribe(ResponseData => {
      console.log(ResponseData)
      this.getdata = ResponseData
    })
  }

  createpost(inptitle: HTMLInputElement) {
    let posttit = { title: inptitle.value }
    inptitle.value = '';
    this.service.createpostchanges(posttit).subscribe((responseDa: any) => {
      console.log(responseDa);
      this.postdata = responseDa;
    }, error => {
      this.hey = error;
      if (error.status === 400) {
        alert('Bad request');
      }
      else throw error;
      
    });
  }

  updatepost(dat: any) {
    this.service.updatepostchanges(dat).subscribe(responsed => {
      console.log(responsed);
    });
  }

  deletepost(dat:any) {
    this.service.deletepostchanges(dat.id).subscribe(responss => {
      let index = this.getdata.indexOf(dat);
      this.getdata.splice(index, 1);
    }, error => {
      if (error.status === 404)
        alert('Post already deleted');
      else throw error;
    })
  }
}
