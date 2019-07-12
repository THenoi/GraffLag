import { DeleteService } from './../services/delete.service';
import { LoginService } from './../services/login.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  deleteForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })
  userDeleteInfo: {};
  constructor(private router: Router, private LoginService: LoginService,private DeleteService:DeleteService) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }

  delete() {

    this.DeleteService.delete(this.deleteForm.value).subscribe((data) => {
      this.userDeleteInfo = data,
       this.userDeleteInfo == 0 ? console.log("ERROR user was'nt deleted"): console.log("user was deleted");
       
       
    })


  }

  ngOnInit() {
  }

}
