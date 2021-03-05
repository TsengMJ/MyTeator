<template>
  <v-container class="table_container">
    <EditProfileTableBasicInformation />
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
import EditProfileTableBasicInformation from "@/components/EditProfileTableBasicInformation";

export default {
  name: "EditProfileTable",
  components: {
    EditProfileTableBasicInformation
  }
}
</script>

<style lang="scss" scoped>
.table_container {
  display: flex;
  flex-direction: column;
}
</style>
