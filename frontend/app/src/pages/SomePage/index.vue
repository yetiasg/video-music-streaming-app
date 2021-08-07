<template>
  <div class="container">
    <h3>Some page</h3>
    <h6>{{userId}}</h6>
    <base-button @click="logout" mode="filledBtn">logout</base-button>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  },
  computed: {
    userId(){
      return this.$store.getters.getUserId
    }
  }
}
</script>

<style scoped>
.container {
  margin: 3rem;
  width: 10rem;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: hsl(47, 100%, 97%);
  /* background-color: black; */
}
</style>