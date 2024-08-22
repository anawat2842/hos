<template>
  <div>
    <v-container class="v-container">
      <v-row>
        <v-col cols="12">
          <v-card class="elevation-2">
            <v-card-title>
              <h1 class="title">Doctor List</h1>
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1 data-table"
              ></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DoctorList",
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
          text: "Name",
          align: "start",
          sortable: false,
          value: "Name",
        },
        { text: "Email", value: "Email" },
        { text: "Specialization", value: "Specialization" },
        { text: "Phone", value: "Phone" },
        { text: "Department", value: "Department_Name" },
      ],
      desserts: [],
    };
  },
  methods: {
    // create function to fetch data from API
    getData() {
      axios
        .get(this.apiUrl + "doctors")
        .then((response) => {
          this.desserts = response.data;
          console.log("doctor -", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* Container styling */
.v-container {
  padding: 20px;
}

/* Card styling */
.v-card {
  border-radius: 8px; /* Rounded corners for the card */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Card title styling */
.title {
  font-size: 48px; /* Larger font size for the card title */
  color: #3f51b5; /* Primary color for the title text */
  margin-bottom: 0; /* Remove default bottom margin */
}

/* Data Table styling */
.data-table {
  margin-top: 20px; /* Margin at the top of the data table */
}

.v-data-table th {
  background-color: #e3f2fd; /* Light blue background for table headers */
  color: #1e88e5; /* Blue text color for headers */
}

.v-data-table td {
  padding: 12px; /* Padding inside table cells */
}

.v-data-table .v-data-table__wrapper {
  background-color: #ffffff; /* White background for the table */
}

/* Responsive styling */
@media (max-width: 600px) {
  .v-data-table {
    font-size: 0.875rem; /* Smaller font size on smaller screens */
  }
}
</style>
