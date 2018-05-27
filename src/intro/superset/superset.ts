import { bind } from 'decko';

enum Categories {
  Laptops,
  Phones,
  None = 'uncotegorized'
}


const product = {
  category: Categories.Phones,
  id: '111',
};

class AppComponent {
  category: Categories.Phones;
  constructor(private message: string) { }

  onInit(): void {
    window.addEventListener('click', this.greet);
  }

  @bind()
  greet(): void {
    alert(this.message);
  }
}
