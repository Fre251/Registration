import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser( id:number){
    this.userService.delete(id).pipe().subscribe(()=>{
      this.loadAllUsers();
    });
  }

  loadAllUsers(){
    this.userService.getAll().pipe(first()).subscribe((users)=>{
      this.users = users;
    })
  }

}
