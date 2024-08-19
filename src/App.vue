<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <v-toolbar-title>Hospital management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/doctors">Doctors</v-btn>
        <v-btn text to="/patients">Patients</v-btn>
        <v-btn text to="/rooms">Rooms</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-responsive>
        <v-container>
          <router-view />
        </v-container>
      </v-responsive>
    </v-main>

    <v-footer app>
      <v-col class="text-center" cols="12">
        <span>&copy; 2024 My App</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass"; // Import Vuetify styles

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5; // Optional background color
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.v-footer {
  background-color: #2c3e50;
  color: white;
  padding: 16px 0;
}
</style>
