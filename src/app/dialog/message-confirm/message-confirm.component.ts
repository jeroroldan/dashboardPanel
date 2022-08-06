import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-confirm',
  templateUrl: './message-confirm.component.html',
  styleUrls: ['./message-confirm.component.scss']
})
export class MessageConfirmComponent implements OnInit {
  message:string;
  btn = 'Aceptar';

  constructor(public dialogRef: MatDialogRef<MessageConfirmComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message
   }

  ngOnInit(): void {
  }


   onNoClick(): void {
    this.dialogRef.close();
  }

}
