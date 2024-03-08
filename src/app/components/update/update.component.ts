import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchId = ''

  constructor(private _snackBar: SnackBarService, private postService: PostService) {
  }


  form = new FormGroup({
    id: new FormControl('001',
      [Validators.required, Validators.maxLength(5)]),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  })

  updateData() {
    console.log(this.form)
    this.postService.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    ).subscribe(res => {
      if (res) {
        this._snackBar.trigger('update', 'close');
      }
    })

  }


  loadData() {
    this.postService.find(this.searchId)
      .subscribe(response => {
        console.log(response)

        this.form.patchValue({
          id: response[0].id,
          userId: response[0].userId,
          title: response[0].title,
          body: response[0].body
        })

      });
  }

}
