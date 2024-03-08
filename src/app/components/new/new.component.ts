import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


  constructor(private _snackBar: SnackBarService, private postService: PostService) {
  }


  form = new FormGroup({
    id: new FormControl('001',
      [Validators.required, Validators.maxLength(5)]),
    userId: new FormControl('', [Validators.required, Validators.pattern(/[1,3]/)]),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  })

  createData() {
    console.log(this.form)
    this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    ).subscribe(res => {
      if (res) {
        this._snackBar.trigger('saved', 'close')

      }
    })

  }

  ngOnInit(): void {
  }

}
