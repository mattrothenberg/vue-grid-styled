import { configure } from "@storybook/vue";
import Vue from "vue";

// Import your custom components.
import VueGridStyled from "@/index";

// Install this library
Vue.use(VueGridStyled, {
  theme: {
    colors: {
      red: "salmon"
    }
  }
});

const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
