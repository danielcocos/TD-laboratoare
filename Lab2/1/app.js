function run() {
  new Vue({
    el: "#app",
    data: {
      message: "",
      showMessage: false,
    },
    methods: {
      doSomething: function () {
        console.log("The input string value is: " + this.message);
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
