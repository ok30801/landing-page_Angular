import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../assets/icons/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {

  @Output() close = new EventEmitter<void>()

  title: string = 'Вход'
  loginForm: FormGroup;
  showPassword: boolean = false

  constructor(private authService: AuthService, private router: Router) { }

  submitLogin() {
    // this.authService.login(this.loginForm.value).subscribe({
    //   next: () => this.router.navigate(['admin']),
    //   error: (err) => alert(err.message)
    // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword
  }
}
