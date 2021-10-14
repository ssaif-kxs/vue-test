<template>
  <div class="user-list">
    <div v-if="users">
      <pre>{{ users }}</pre>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserList",
  data() {
    return {
      users: {
        type: Object,
      },
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["loadUsers"]),
    async fetchUsers() {
      this.loadUsers();
      this.users = await this.$store.state.users;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
