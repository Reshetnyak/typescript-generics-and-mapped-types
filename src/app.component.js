class AppComponent {
  constructor(userService) {
    this.userService = userService;
  }
  async onInit() {
    this.user = await this.userService.getUser(1);
  }
}
