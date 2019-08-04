<story name="Basic Grid">
  <v-flex flexWrap="wrap" maxWidth="960px" mx="auto">
    <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/2</v-flex>
    </v-box>
    <v-box :width="[1, 1/2]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/2</v-flex>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/3</v-flex>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/3</v-flex>
    </v-box>
    <v-box :width="[1, 1/3]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/3</v-flex>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/4</v-flex>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/4</v-flex>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/4</v-flex>
    </v-box>
    <v-box :width="[1, 1/4]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">1/4</v-flex>
    </v-box>
  </v-flex>
</story>

<story name="Width">
  <v-flex flexDirection="column">
    <v-box
      bg="red"
      :p="3"
      :mb="4"
      :width="[
        1/2,
        1/3,
        1/4,
        1/6
      ]">Responsive Widths</v-box>
      <v-box bg="aliceblue" :p="3" :mb="4" :width="256">Fixed Pixel Width (256px)</v-box>
      <v-box bg="aliceblue" :p="3" width="40em">Em-based Width (40em)</v-box>
  </v-flex>
</story>

<story name="Padding">
  <v-flex flexDirection="column">
    <v-box bg="aliceblue" :mb="4" :p="2">:p="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :pt="2">:pt="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :pb="2">:pb="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :pl="2">:pl="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :pr="2">:pr="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :px="2">:px="2"</v-box>
    <v-box bg="aliceblue" :mb="4" :py="2">:py="2"</v-box>
  </v-flex>
</story>

<story name="Margin">
  <v-flex flexDirection="column">
    <v-box bg="aliceblue" :m="4">:m="4"</v-box>
    <v-box bg="aliceblue" :mt="4">:mt="4"</v-box>
    <v-box bg="aliceblue" :mb="4">:mb="4"</v-box>
    <v-box bg="aliceblue" :ml="4">:ml="4"</v-box>
    <v-box bg="aliceblue" :mr="4">:mr="4"</v-box>
    <v-box bg="aliceblue" :mx="4">:mx="4"</v-box>
    <v-box bg="aliceblue" :my="4">:my="4"</v-box>
  </v-flex>
</story>

<story name="CustomTags">
  <v-flex tag="article" flexWrap="wrap" maxWidth="960px" mx="auto">
    <v-box tag="main" :width="[1, 1/2]" :px="[0, 1]" :mb="2">
      <v-flex alignItems="center" justifyContent="center" bg="aliceblue" :py="4">Main within article</v-flex>
    </v-box>
  </v-flex>
</story>
