import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user=setting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
originalusersetting : UserSettings = {
title:null,
firstname:null,
lastname:null,
married:null,
interest:null,
fav:null
}
usersetting: UserSettings = { ...this.originalusersetting};
  constructor() { }

  ngOnInit() {
  }

}
