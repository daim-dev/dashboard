<template>
  <div class="container mx-auto">
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Meta
      v-if="description"
      name="description"
      :content="description"
      itemprop="description"
    />
    <h1 class="text-3xl">{{ title }}</h1>
    <button class="btn btn-primary" @click="create">Add new Project</button>
    <div class="w-full p-12px mx-auto">
      <div class="flex flex-auto flex-wrap -m-12px">
        <div class="p-12px w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex" v-for="item of items" :key="item.name"> 
          <Card  v-bind="item" class="w-full mx-auto"></Card>
        </div>
      </div>
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
