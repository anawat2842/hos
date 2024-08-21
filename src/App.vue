<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app color="dark" dark>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/departments">
          <v-list-item-icon>
            <v-icon>mdi-department</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Departments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/patients">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Patients</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/doctors">
          <v-list-item-icon>
            <v-icon>mdi-stethoscope</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Doctors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/nurses">
          <v-list-item-icon>
            <v-icon>mdi-nurse</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Nurses</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/rooms">
          <v-list-item-icon>
            <v-icon>mdi-bed</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Rooms</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/appointments">
          <v-list-item-icon>
            <v-icon>mdi-calendar-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Appointments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/medical-records">
          <v-list-item-icon>
            <v-icon>mdi-file-medical</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Medical Records</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/treatments">
          <v-list-item-icon>
            <v-icon>mdi-heart-pulse</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Treatments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admissions">
          <v-list-item-icon>
            <v-icon>mdi-hospital-building</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Admissions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/pharmacy">
          <v-list-item-icon>
            <v-icon>mdi-pill</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Pharmacy</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/prescriptions">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prescriptions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/medications">
          <v-list-item-icon>
            <v-icon>mdi-pill</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Medications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/prescription-medications">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Prescription Medications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/billing">
          <v-list-item-icon>
            <v-icon>mdi-currency-usd</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Billing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/beds">
          <v-list-item-icon>
            <v-icon>mdi-bed-empty</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Beds</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/patient-queues">
          <v-list-item-icon>
            <v-icon>mdi-account-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Patient Queues</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/treatment-logs">
          <v-list-item-icon>
            <v-icon>mdi-file-chart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Treatment Logs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/users">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="dark" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hospital Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/doctors">Doctors</v-btn>
        <v-btn text to="/patients">Patients</v-btn>
        <v-btn text to="/rooms">Rooms</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app dark>
      <v-col class="text-center" cols="12">
        <span>&copy; 2024 My App</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false, // Controls the visibility of the sidebar
    };
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #121212; // Dark background color for the app
}

a {
  font-weight: bold;
  color: #ffffff;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.v-footer {
  background-color: #1e1e1e;
  color: white;
  padding: 16px 0;
}
</style>
