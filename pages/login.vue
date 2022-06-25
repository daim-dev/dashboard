<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto">
    <form @submit.prevent="handleLogin">
      <div class="form-group mb-6">
        <label
          for="emailInput"
          class="form-label inline-block mb-2 text-gray-700"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <button
        type="submit"
        :disabled="loading"
        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        <template v-if="loading">Loading</template>
        <template v-else>Send magic link</template>
      </button>
    </form>
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
        router.push('/')
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
