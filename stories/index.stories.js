import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Grid Styled", module).add("Basic Grid", () => ({
  template: `<v-flex flexWrap="wrap" maxWidth="960px" mx="auto">
    <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-box bg="aliceblue" :py="4"/>
    </v-box>
  </v-flex>`
}));

storiesOf("Grid Styled", module).add("Widths", () => ({
  template: `<div>
    <v-box
      bg="aliceblue"
      :p="3"
      :mb="4"
      :width="[
        1/2,
        1/3,
        1/4,
        1/6
      ]">Responsive Widths</v-box>
    <v-box bg="aliceblue" :p="3" :mb="4" :width="256">Fixed Pixel Width</v-box>
    <v-box bg="aliceblue" :p="3" width="40em">Em-based Width</v-box>
  </div>`
}));
