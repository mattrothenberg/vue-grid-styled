import styled from "vue-styled-components";
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  maxWidth
} from "styled-system";

const boxStyles = props => [
  width(props),
  space(props),
  fontSize(props),
  color(props),
  flex(props),
  order(props),
  alignSelf(props),
  maxWidth(props)
];

const flexStyles = props => [
  flexWrap(props),
  flexDirection(props),
  alignItems(props),
  justifyContent(props)
];

const Box = (props, theme) => {
  const tag = props.tag ? props.tag : "div";
  const themedProps = { ...props, theme };
  return styled(tag)(
    [],
    { boxSizing: "border-box" },
    ...boxStyles(themedProps)
  );
};

const Flex = (props, theme) =>
  styled("div")(
    [],
    { display: "flex" },
    ...boxStyles(props, theme),
    ...flexStyles(props)
  );

export { Box, Flex };
