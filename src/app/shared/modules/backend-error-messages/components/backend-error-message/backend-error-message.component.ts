import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../../../types/backend-errors.interface";

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss']
})
export class BackendErrorMessageComponent implements OnInit{
  @Input() backendError!: BackendErrorsInterface | any
  errorMessages: string[] = []

  ngOnInit() {
    if (this.backendError) {
      this.errorMessages.push(this.backendError);
    }
    for (const name in this.backendError.errors) {
      const messages = this.backendError.errors[name].join(', ');
      this.errorMessages.push(`${name} ${messages}`);
    }
  }

}
