<script>
import { Box } from "./styles";

export default {
  name: "box",
  functional: true,
  render(h, { props, children, parent }) {
    return h(Box(props, parent.$vgsTheme), children);
  }
};
</script>
