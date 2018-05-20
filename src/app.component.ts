import { UserService } from './user.service';
import { User } from './model';

export class AppComponent {
  user: User;
  constructor(private userService: UserService) { }
  async onInit(): Promise<void> {
    this.user = await this.userService.getUser(1);
  }
}
