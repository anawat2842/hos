<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              <h1>Department</h1>
              <v-spacer></v-spacer>
              <!-- <v-btn color="primary" @click="showAddDialog = true">Add</v-btn> -->
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">No.</th>
                          <th class="text-left">Name</th>
                          <th class="text-left">Location</th>
                          <th class="text-left">Phone</th>

                          <!-- <th class="text-center">Actions</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in desserts"
                          :key="item.Appointment_ID"
                        >
                          <td class="text-left">{{ index + 1 }}</td>
                          <td class="text-left">{{ item.Name }}</td>
                          <td class="text-left">{{ item.Location }}</td>
                          <td class="text-left">{{ item.Phone }}</td>
                          <!-- <td class="text-center">
                            <v-btn color="amber" small @click="editItem(item)"
                              >Edit</v-btn
                            >
                            <v-btn color="red" small @click="deleteItem(item)"
                              >Delete</v-btn
                            >
                          </td> -->
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

      <v-dialog v-model="showEditDialog" max-width="600px">
        <v-card>
          <v-card-title
            >Edit Information of <b>{{ selected.Name }}</b></v-card-title
          >
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Date_of_Birth"
                  label="Date of Birth"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Gender"
                  label="Gender"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Phone"
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Email"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="selected.Address"
                  label="Address"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn color="green" small @click="updateItem()">Update</v-btn>
                <v-btn color="danger" small @click="cancelEdit()">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="showAddDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>Add New Patient</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Date_of_Birth"
                  label="Date of Birth"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Gender"
                  label="Gender"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Phone"
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Email"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newPatient.Address"
                  label="Address"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn color="blue" @click="addPatient()">Add Patient</v-btn>
                <v-btn color="red" @click="showAddDialog = false">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DepartmentList",
  data() {
    return {
      showEditDialog: false,
      showAddDialog: false,
      update_ID: "",
      selected: {
        Name: "",
        Gender: "",
        Date_of_Birth: "",
        Phone: "",
        Email: "",
        Address: "",
      },
      newPatient: {
        Name: "",
        Gender: "",
        Date_of_Birth: "",
        Phone: "",
        Email: "",
        Address: "",
      },
      apiUrl: process.env.VUE_APP_API_URL,
      desserts: [],
    };
  },
  beforeMount() {
    this.getData();
    console.log("beforeMount");
  },
  mounted() {
    this.getData();
    console.log("mounted");
  },
  methods: {
    getData() {
      axios
        .get(this.apiUrl + "departments")
        .then((response) => {
          this.desserts = response.data;
          console.log("Dept -", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // editItem(item) {
    //   this.selected = {
    //     ...item,
    //     Date_of_Birth: item.Date_of_Birth.split("T")[0],
    //   };
    //   this.update_ID = item.Patient_ID;
    //   this.showEditDialog = true;
    // },
    // deleteItem(item) {
    //   axios
    //     .delete(`${this.apiUrl}patient/${item.Patient_ID}`)
    //     .then(() => {
    //       this.getData();
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // updateItem() {
    //   axios
    //     .put(`${this.apiUrl}patient/${this.update_ID}`, this.selected)
    //     .then(() => {
    //       this.getData();
    //       this.showEditDialog = false;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    cancelEdit() {
      this.showEditDialog = false;
    },
    addPatient() {
      axios
        .post(`${this.apiUrl}patient`, this.newPatient)
        .then(() => {
          this.getData();
          this.showAddDialog = false;
        })
        .catch((error) => {
          console.error(error);
        });
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
