import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDepot } from '../depot/depot.interface';
import { IDon } from '../don/don.interface';
import { IUser } from '../user/user.model';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  user: User;
  moneyDonated: number = 0;
  devicesDonated: IDepot[] = [];
  plantedTree: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.accountService.userValue;
    this.accountService.getDataById(this.user.id).subscribe((data: any) => {
      this.plantedTree = data.body.plantedTree;
      data.body.donations.forEach((donation: IDon) => {
        this.moneyDonated += donation.amount;
      });
      data.body.devices.forEach((device: IDepot) => {
        this.devicesDonated.push(device);
      });
    });
  }

}
