import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DoctorList from "../views/Doctors.vue";
import PatientList from "@/components/patients.vue";
import roomList from "@/components/rooms.vue";
import departments from "@/components/departments.vue";

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
    component: PatientList,
  },
  {
    path: "/rooms",
    // name: "Room list",
    component: roomList,
  },
  {
    path: "/departments",
    name: "DepartmentList",
    component: departments,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
