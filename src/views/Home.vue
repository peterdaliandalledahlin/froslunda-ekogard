<template>
  <v-parallax
    dark
    src="./logo.jpg"
  >
  <v-layout white--text align-center column justify-center style="margin-top: 8.5em;">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="font-weight-thin my-6">
          Fröslunda Ekogård
        </h1>
        <h3 class="subheading">
          Fröslunda Ekogård drivs ekologiskt av Sune och Agneta Erlandsson.<br /> Gården ligger i Altuna, ca  25km norr om Enköping.
        </h3>
      </v-col>
    </v-row>
    </v-layout>>
  </v-parallax>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      //overlay: true,
    }),
  }
</script>

<style scoped>
h1 {
  font-size: clamp(4rem, 8vw, 8rem);
}
h3 {
  font-size: clamp(1rem, 3vw, 1.5rem);
}
h1, h3 {
  text-shadow: 1px 1px rgba(255,255,255, .8);
}
</style>