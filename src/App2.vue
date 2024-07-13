<!-- * THIS IS HOW WE CREATE COMPONENT WITH OPTION API -->
<script>
export default {
  // here we will store data
  data() {
    return {
      name: "John Doe",
      status: "",
      tasks: ["task1", "task2", "task3", "task4"],
      link: "https://google.com",
    };
  },
  // here we will have all the methods
  methods: {
    changeStatus() {
      console.log("hello");
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <!-- here name is available -->
  <h1>{{ name }}</h1>

  <!-- * this is  how we can render things using the if else statement -->
  <!-- here we ar rendering based on status -->
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is Pending</p>
  <p v-else>User is Inactive</p>

  <!-- * looping -->
  <!-- for looping here we also need to provide the key which we can do by :key -->
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- * v-bind help us to bind data to an attribute -->
  <!-- here we have used `v-bind to Vue for look for variable `link` if we would not have that `href` would be string link -->
  <!-- <a v-bind:href="link">Click Here for Google</a> -->
  <!-- We can also use it without  -->
  <a :href="link">Click Here for Google</a>

  <br />
  <!-- *  `v-on` can be used for click events  -->
  <!-- <button v-on:click="changeStatus">Change Status</button> -->
  <button @click="changeStatus">Change Status</button>
</template>
