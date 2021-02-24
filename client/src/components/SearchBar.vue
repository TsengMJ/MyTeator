<template>
  <div>
    <v-text-field
        class="search-field"
        placeholder="收尋"
    >
      <template slot="append-outer">
        <v-icon large >mdi-magnify</v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchBar"

}
</script>

<style lang="scss" scoped>
.search-field {
  width: 300px;
}
</style>
