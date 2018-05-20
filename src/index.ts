import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { user, User } from './intro/extendsJs';

const appDiv: HTMLElement = document.getElementById('app');

const component = new AppComponent(new UserService);

component.onInit()
 .then(() => appDiv.innerHTML = 'User name is: ' + component.user.name);

// extends.ts
// (<Window & {user: User}>window).user = user;
// user.product = 'hello';
