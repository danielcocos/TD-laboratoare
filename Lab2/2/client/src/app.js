function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: async function  () {
      this.usersService = users();
      this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
     
    },
    methods: {},
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
