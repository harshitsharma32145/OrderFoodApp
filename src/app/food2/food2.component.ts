import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodComponent } from '../food/food.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-food2',
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.css']
})
export class Food2Component {
  userdata: any = [];
  // Addfood2:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }
  Addfood2 = this.fb.group({
    mobileNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    trainNo: new FormControl('', ),
     time:new FormControl(''),
     journeyDate: new FormControl('', [Validators.required]),
    boardingStation: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    console.log(this.data);
    this.Addfood2.patchValue(this.data)
  }

  goto3(data: any) {
    let dialogRef = this.dialog.open(OrderComponent, {
      width: '100%' ,
      height: '100%',
      data
    })
  }
}

