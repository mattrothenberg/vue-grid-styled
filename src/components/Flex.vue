<script>
import { Flex } from "./styles";

export default {
  name: "flex",
  functional: true,
  render(h, { props, children }) {
    return h(Flex(props, parent.$vgsTheme), children);
  }
};
</script>
