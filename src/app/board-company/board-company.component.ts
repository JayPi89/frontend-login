import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-board-company',
  templateUrl: './board-company.component.html',
  styleUrls: ['./board-company.component.scss']
})
export class BoardCompanyComponent implements OnInit {
  content: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
