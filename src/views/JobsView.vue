<script setup>
import { getJobs } from "@/api/jobs";
import JobListings from "@/components/JobListings.vue";
import { onMounted, reactive } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const jobState = reactive({ jobs: [], isLoading: true });

onMounted(async () => {
  try {
    jobState.isLoading = true;
    const fetchedJobs = await getJobs();
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    jobState.jobs = fetchedJobs.data;

    jobState.isLoading = false;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <JobListings :showButton="false" :jobs="jobState.jobs" />
  <div v-if="jobState.isLoading" class="mx-auto w-fit mt-10">
    <PulseLoader />
  </div>
</template>
