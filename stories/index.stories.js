import { storiesOf } from "@storybook/vue";
import { registerStories } from "vue-storybook";

const req = require.context("./", true, /\.vue$/);

function loadStories() {
  req.keys().forEach(filename => {
    registerStories(req, filename, storiesOf, {});
  });
}

loadStories();
