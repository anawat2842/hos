import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DoctorList from "../views/Doctors.vue";
import patientList from "@/components/patient-list.vue";
import roomList from "@/components/room-list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/doctors",
    name: "Doctors List",
    component: DoctorList,
  },
  {
    path: "/patients",
    name: "Patients List",
    component: patientList,
  },
  {
    path: "/rooms",
    // name: "Room list",
    component: roomList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
