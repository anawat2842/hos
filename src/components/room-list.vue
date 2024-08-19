<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <h1>Room List</h1>
              <v-spacer></v-spacer>
              <!-- <v-btn color="primary" @click="showAddDialog = true"
                >Add Room</v-btn
              > -->
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">No.</th>
                          <th class="text-center">Roome Number</th>
                          <th class="text-center">Type</th>
                          <th class="text-center">Department</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in desserts"
                          :key="item.Patient_ID"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td class="text-center">{{ item.Room_Number }}</td>
                          <td class="text-center">{{ item.Type }}</td>
                          <td class="text-center">
                            {{ item.Department_name }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
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
  // name: "Room Lists",
  data() {
    return {
      showEditDialog: false,
      showAddDialog: false,

      apiUrl: process.env.VUE_APP_API_URL,
      desserts: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // create function to fetch data from API
    getData() {
      axios
        .get(this.apiUrl + "rooms")
        .then((response) => {
          console.log(response.data);
          this.desserts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.selected = {
        ...item,
        Date_of_Birth: item.Date_of_Birth.split("T")[0],
      };

      this.showEditDialog = true;
    },
  },
};
</script>

<style scoped>
/* General Styles */
#app {
  font-family: "Roboto", sans-serif;
  background-color: #f5f5f5;
  color: #424242;
}

/* App Bar */
.v-app-bar {
  background-color: #3f51b5;
}

.v-toolbar-title {
  color: #ffffff;
}

.v-btn {
  color: #ffffff;
}

.v-btn:hover {
  background-color: #303f9f;
}

.v-container {
  padding: 20px;
}

.v-card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  background-color: #e3f2fd;
  color: #1e88e5;
  border-bottom: 1px solid #bbdefb;
  font-size: 1.5rem;
}

.v-card-text {
  padding: 20px;
}

/* Buttons */
.v-btn {
  border-radius: 4px;
}

.v-btn.small {
  padding: 6px 12px;
}

.v-btn.color-primary {
  background-color: #4caf50;
}

.v-btn.color-danger {
  background-color: #f44336;
}

.v-btn.color-green {
  background-color: #4caf50;
}

.v-btn.color-blue {
  background-color: #2196f3;
}

/* Table */
.v-simple-table {
  width: 100%;
}

.v-simple-table th {
  background-color: #eeeeee;
}

.v-simple-table td {
  border-bottom: 1px solid #dddddd;
}

.v-simple-table th,
.v-simple-table td {
  padding: 12px;
}

.v-simple-table tr:hover {
  background-color: #f1f8ff;
}

/* Dialogs */
.v-dialog {
  border-radius: 8px;
}

.v-dialog .v-card {
  padding: 20px;
}

.v-dialog .v-card-title {
  font-size: 1.25rem;
}

.v-dialog .v-card-text {
  font-size: 1rem;
}

.v-dialog .v-btn {
  margin-top: 16px;
}
</style>
