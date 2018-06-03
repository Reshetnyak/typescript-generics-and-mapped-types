import { User } from './model';
import { UserService } from './user.service';

export class AppComponent {
  user: User;
  constructor(private userService: UserService) { }
  async onInit(): Promise<void> {
    this.user = await this.userService.getUser(1);
  }
}



// interface Person {
//   name: string;
//   age: number;
// }

// interface Teacher extends Person {
//   canTeach: true;
// }

// interface Driver extends Person {
//   canDrive: true;
// }

// const person = {
//   name: 'hello',
//   age: 22
// };

// const reg = /const/g;
// //comment

// type Employee = Teacher | Driver;
// type DrivingInstructor = Teacher & Driver;

// @Component({ selector: 'my-component' })
// class AppComponent implements OnInit {
//   constructor(private userService: UserService) {}
//   onInit(is: boolean): void {
//     return userService.getUser().then(setUser);
//   }
// }

// function setUser(resp: Responce) {
//   window.user = resp.json();
// }

// function Component(s): any {}

// type ReadonlyEmployee = Partial<Employee>;
