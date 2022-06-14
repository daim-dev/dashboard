<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <h1 class="text-3xl">{{title}}</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: 'Daim Dashboard',
      description: 'Daim Dashboard'
    }
  }
}
</script>
