import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Lakas } from '../lakas';
import { LakasokService } from '../lakas.service';


declare var M: any;

@Component({
  selector: 'app-lakasok',
  templateUrl: './lakasok.component.html',
  styleUrls: ['./lakasok.component.css'],
  providers: [LakasokService]
})
export class LakasokComponent implements OnInit {

  constructor(public lakasokService: LakasokService) {

  }

  ngOnInit(): void {
    this.resetForm();
    this.refreshLakasokList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.lakasokService.selectedLakas = {
      _id: "",
      szam: "",
      alapterulet: "",
      legter: ""
    }
  }
  showMsg: boolean = false;
  showMsg2: boolean = false;
  showMsg3: boolean = false;

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.lakasokService.postLakas(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshLakasokList();
        this.showMsg = true;
      });
    } else {
      this.lakasokService.putLakasok(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshLakasokList();
        this.showMsg3 = true;
      });
    }
  }

  refreshLakasokList() {
    this.lakasokService.getLakasokList().subscribe((res) => {
      this.lakasokService.lakasok = res as Lakas[];
    });
  }

  onEdit(lak: Lakas) {
    this.lakasokService.selectedLakas = lak;
  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Biztos, hogy törlöd?') == true) {
      this.lakasokService.deleteLakas(_id).subscribe((res) => {
        this.refreshLakasokList();
        this.resetForm(form);
        this.showMsg2 = true;
      });
    }
  }
}
