<template>
  <div class="container mx-auto px-6 py-12 h-full w-full">
    <div
      class="flex justify-center items-center flex-wrap h-full w-full g-6 text-gray-800"
    >
      <!-- <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="w-full"
          alt="Phone image"
        />
      </div> -->
      <div class="md:w-8/12 lg:w-5/12 lg:ml-20 w-auto">
        <form @submit.prevent="handleLogin" class="w-auto">
          <div class="form-group">
            <label
              for="emailInput"
              class="form-label inline-block mb-2 text-gray-700 text-lg"
              >Email address</label
            >
            <input
              type="email"
              class="form-control text-lg"
              id="emailInput"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full btn btn-primary"
          >
            <template v-if="loading">Loading</template>
            <template v-else>Send magic link</template>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const router = useRouter();

    const loading = ref(false);
    const email = ref("");

    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        router.push("/");
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      email,
      handleLogin,
    };
  },
};
</script>
