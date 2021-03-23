import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName ="";
  contFamily = "";
  contNumber ="";
  contacts = [];

  constructor(private alertCtrl:AlertController) {}

  saveC(){
    let contact = {
    name: this.contName,
    family: this.contFamily,
    number: this.contNumber
  }
  this.contacts.push(contact);
  this.clearField();
}

  clearField(){
    this.contName ="";
    this.contFamily = "";
    this.contNumber ="";
  }

  async confirmDelete(cont){
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete Contacts',
      message: 'Remove this contact?',
      buttons:[
        {
        text: 'No',
        role: 'cancel',
        cssClass:'icon-color',
        handler: () => {
            console.log('Cancel Clicked');
        }
        },
        {
          text:'Yes',
          cssClass:'icon-color',
          handler: () =>{
            let index = this.contacts.indexOf(cont);

            if(index > -1){
              this.contacts.splice(index, 1);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}