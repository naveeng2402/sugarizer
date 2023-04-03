// Rebase require directory
requirejs.config({
  baseUrl: "lib",
  paths: {
    activity: "../js",
  },
});

// Vue main app
var app = new Vue({
  el: "#app",
  components: {
    pawn: Pawn,
  },
  data: {
    currentenv: null,
    displayText: "",
    pawns: [],
  },
  methods: {
    initialized: function () {
      // Sugarizer initialized
      this.currentenv = this.$refs.SugarActivity.getEnvironment();
      this.displayText = "Hello " + this.currentenv.user.name + "!";
    },
    onAddClick: function () {
      this.pawns.push(this.currentenv.user.colorvalue);
      this.displayText = this.currentenv.user.name + " played";
    },
  },
});
