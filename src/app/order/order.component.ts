import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private service: ServiceService, private dialog: MatDialog, private snackbar: MatSnackBar,) { }

  Addfood3 = this.fb.group({
    mobileNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    trainNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    time: new FormControl(''),
    journeyDate: new FormControl('', [Validators.required]),
    boardingStation: new FormControl('', Validators.required),
    foodname: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    console.log(this.data);
    this.Addfood3.patchValue(this.data)
  }


  Add(data: any) {
    if (confirm("please Confirm ")) {
      this.service.adddata(data).subscribe((res: any) => {
        console.log(res);

        this.snackbar.open('food ordered succesfully', 'ok', {
          duration: 3000
        })
      })
      this.dialog.closeAll()
    }
  }
  fooddetail: FoodDetail[] = [
    { foodname: 'pizza', description: 'Small', price: 199.00 },
    { foodname: 'momo', description: 'Medium ', price: 299.00 },
    { foodname: 'burger', description: 'Large', price: 399.00 },
  ]
}
interface FoodDetail {
  foodname: string;
  description: string;
  price: number;
}