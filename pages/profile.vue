<template>
  <form
    class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto"
    @submit.prevent="updateProfile"
  >
    <div class="mb-2">
      <div  class="mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          :value="user?.email"
          disabled
          class="form-control"
        />
      </div>
      <div v-if="profile"  class="mb-2">
        <label for="givenName">First Name</label>
        <input
          id="givenName"
          type="text"
          v-model="profile.givenName"
          class="form-control"
        />
      </div>
      <div v-if="profile"  class="mb-2">
        <label for="familyName">Last Name</label>
        <input
          id="familyName"
          type="text"
          v-model="profile.familyName"
          class="form-control"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="btn btn-primary block w-full"
        :disabled="loading"
      >
        {{ loading ? "Loading ..." : "Update" }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const supabase = useSupabaseClient();
    const loading = ref(true);
    const user = useSupabaseUser();

    async function getProfile() {
      const defaultProfile = {
        givenName: "",
        familyName: "",
      };
      try {
        loading.value = true;

        if (user.value && user.value.id) {
          const { data, error, status } = await supabase
            .from("persons")
            .select("givenName, familyName")
            .eq("id", user.value.id)
            .single();

          if (error && status !== 406) throw error;

          if (data) {
            return data;
          }
        }
        return defaultProfile;
      } catch (error) {
        console.error(error.message);
        return defaultProfile;
      } finally {
        loading.value = false;
      }
    }

    async function updateProfile() {
      try {
        loading.value = true;

        const updates = {
          id: user.value.id,
          givenName: profile.value.givenName,
          familyName: profile.value.familyName,
          updatedAt: new Date(),
        };

        let { error } = await supabase.from("persons").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    const { data: profile } = await useAsyncData(
      "user-profile",
      async () => await getProfile(),
    );

    loading.value = false;

    return {
      profile,
      user,
      loading,
      updateProfile,
    };
  },
});
</script>
