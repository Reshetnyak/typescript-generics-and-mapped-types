// We can partially imitate enum in JS
const Categories = Object.freeze({
  'Laptops': 0,
  'Phones': 1,
  0: 'Laptops',
  1: 'Phones',
  None: 'uncotegorized'
});

const product = {
  category: Categories.Phones,
  id: '111',
};

class AppComponent {
  constructor(message) {
    this.message = message;
    this.gategory = Categories.Phones;
  }

  onInit() {
    window.addEventListener('click', this.greet);
  }

  // decorators only with Babel for now
  greet() {
    alert(this.message);
  }
}
