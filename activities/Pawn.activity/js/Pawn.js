var Pawn = {
  template: `<div ref="pawn" class="pawn"></div>`,
  props: ["colors"],
  mounted: function () {
    var vm = this;
    requirejs(["sugar-web/graphics/icon"], function (icon) {
      const elem = vm.$refs.pawn;
      var style = elem.currentStyle || window.getComputedStyle(elem, "");
      icon.colorize(vm.$refs.pawn, vm.colors);
    });
  },
};
