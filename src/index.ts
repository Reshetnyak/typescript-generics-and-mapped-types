import { AppComponent } from './app.component';
import { UserService } from './user.service';

const appDiv: HTMLElement = document.getElementById('app');

const component = new AppComponent(new UserService);

component.onInit()
 .then(() => appDiv.innerHTML = 'User name is: ' + component.user.name);
