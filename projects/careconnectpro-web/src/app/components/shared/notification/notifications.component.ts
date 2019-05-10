import { Component, OnInit, OnDestroy } from "@angular/core";
import { Message } from "primeng/primeng";
import {MessageService} from 'primeng/api';
import { NotificationsService } from "service-lib";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: black;
        }
    `],
  providers: [MessageService]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  msgs: Message[] = [];
  subscription: Subscription;

  constructor(
    private notificationsService: NotificationsService,
    private messageService: MessageService
    ) {}

  ngOnInit() {
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    this.subscription = this.notificationsService.notificationChange.subscribe(
      notification => {
        this.msgs = [];
        this.messageService.add(notification);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
