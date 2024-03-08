import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit{

  constructor(private postService:PostService) {
  }

  searchId=''

  list:Array<any>=[]

  loadData(){
      this.postService.find(this.searchId)
      .subscribe(response=>{
        // console.log(response)
        this.list=response;
        console.log(this.list)

      });
  }

  ngOnInit(): void {
  }


}
