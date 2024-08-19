<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1>Appointment</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
// const apiUrl = process.env.VUE_APP_API_URL;
export default {
  beforeMount() {
    this.getData();
    console.log("beforeMount");
  },
  onMounted() {
    console.log(process.env.VUE_APP_API_URL);
  },
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_URL,
      headers: [
        {
          text: "Date",
          align: "center",
          sortable: false,
          value: "Date",
        },
        { text: "Time", value: "Time" },
        { text: "Reason", value: "Reason" },

        { text: "Doctor_name", value: "Doctor_name" },
        { text: "Patient_name", value: "Patient_name" },
      ],
      desserts: [],
    };
  },
  methods: {
    // create function to fetch data from API
    getData() {
      axios
        .get(this.apiUrl + "appointments")
        .then((response) => {
          response.data.forEach((element) => {
            element.Date = element.Date.split("T")[0];
            element.Time = element.Time.split("T")[1].split(".")[0];
          });
          this.desserts = response.data;

          console.log("appointment -", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
