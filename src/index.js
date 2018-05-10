import Box from "./components/Box";
import Flex from "./components/Flex";
const isEmpty = val => val == null || !(Object.keys(val) || val).length;

const LibraryModule = {
  Box,
  Flex,
  install(Vue, options) {
    Vue.component("v-box", Box);
    Vue.component("v-flex", Flex);
    if (!isEmpty(options) && options.hasOwnProperty("theme")) {
      Vue.prototype.$vgsTheme = options.theme;
    }
  }
};

// Export library
export default LibraryModule;

// Export components
export { Box, Flex };
