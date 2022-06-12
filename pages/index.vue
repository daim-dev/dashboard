<template>
<Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
  <div>
    <h1>{{title}}</h1>
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
