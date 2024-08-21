<template>
  <div class="home">
    <DoctorList />
  </div>
</template>

<script>
// @ is an alias to /src
import DoctorList from "@/components/doctors.vue";

export default {
  name: "DcotorList",
  components: {
    DoctorList,
  },
};
</script>
