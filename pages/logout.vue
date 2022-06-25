<template>
  <div class="block p-6 max-w-sm m-auto">
    <h1 class="text-3xl text-center">
      <template v-if="loading">Logging</template>
      <template v-if="!loading || !user">Logged</template>
      out
      <template v-if="user">{{ user.email }}</template>
    </h1>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const loading = ref(true);
const user = useSupabaseUser();
try {
  loading.value = true;
  let { error } = await supabase.auth.signOut();
  if (error) throw error;
} catch (error) {
  alert(error.message);
} finally {
  loading.value = false;
}
</script>
