function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: async function () {
      this.usersService = users();
      this.usersService.get().then((response) => {
        this.users = response.data;
      });
    },
    methods: {},
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
