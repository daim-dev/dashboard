<template>
  <form class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto" @submit.prevent="updateProfile">
  {{user.id}}
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled class="form-control" />
    </div>
    <!-- <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" class="form-control" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="website" v-model="website" class="form-control" />
    </div> -->

    <div>
      <button
        type="submit"
        class="btn btn-primary block w-full"
        :disabled="loading"
      >{{loading ? 'Loading ...' : 'Update'}}</button>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from "vue"

export default {
  setup() {
    const supabase = useSupabaseClient();
    const loading = ref(true)
    const user = useSupabaseUser();
    const person = ref({})

    async function getProfile() {
      try {
        loading.value = true

        const { data, error, status } = await supabase
          .from("persons")
          .select(`givenName, familyName`)
          .eq("id", user.id)
          .single()

        if (error && status !== 406) throw error

        if (data) {
          person.value = data
        }
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    async function updateProfile() {
      try {
        loading.value = true
        user = useSupabaseUser()

        const updates = {
          id: user.id,
          updatedAt: new Date(),
        }

        let { error } = await supabase.from("persons").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      getProfile()
    })

    return {
      user,
      loading,
      updateProfile,
    }
  },
}
</script>
