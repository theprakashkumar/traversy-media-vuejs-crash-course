<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { getJobs } from "@/api/jobs";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const router = useRoute();
const jobId = router.params.id;

const jobState = reactive({ job: {}, isLoading: true });

onMounted(async () => {
  try {
    jobState.isLoading = true;
    const fetchedJobs = await getJobs();
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    for (let job of fetchedJobs.data) {
      if (job.id === jobId) {
        jobState.job = job;
        break;
      }
    }
    console.log(jobState.job);
    jobState.isLoading = false;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <section class="bg-green-50">
    <div v-if="jobState.isLoading" class="mx-auto w-fit pt-10">
      <PulseLoader />
    </div>

    <div v-if="jobState.job.title" class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ jobState.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ jobState.job.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i
                class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
              ></i>
              <p class="text-orange-700">{{ jobState.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{ jobState.job.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ jobState.job.salary }}/ Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ jobState.job.company.name }}</h2>

            <p class="my-2">
              {{ jobState.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ jobState.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ jobState.job.company.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <a
              href="add-job.html"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</a
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
