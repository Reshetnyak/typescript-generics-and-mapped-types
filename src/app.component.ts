import { User } from './model';
import { UserService } from './user.service';

export class AppComponent {
  user: User;
  constructor(private userService: UserService) { }
  async onInit(): Promise<void> {
    this.user = await this.userService.getUser(1);
  }
}
