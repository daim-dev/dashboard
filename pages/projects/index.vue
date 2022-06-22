<template>
  <div class="container">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <h1 class="text-3xl">{{ title }}</h1>
    <button class="btn btn-primary" @click="create">Add new Project</button>
    <div>
      <Card v-for="item of items" :key="item.name" v-bind="item"></Card>
    </div>
  </div>
</template>

<script>
import Card1 from "../../components/Card.vue";
export default {
    data() {
        return {
            title: "Projects",
            description: "Projects",
            items: [
                {
                    description: "Eudits is an auditing platform that enables technical users to complete complex audits performed by people.",
                    image: "https://daim.dev/img/portfolio/eudits.png",
                    links: [
                        {
                            url: "https://www.eudits.com/",
                            name: "Website",
                        },
                    ],
                    name: "Eudits",
                    startDate: "2022-05-25T05:57:04Z",
                },
            ],
        };
    },
    methods: {
        create() {
            console.log("create");
        },
    },
};
</script>
