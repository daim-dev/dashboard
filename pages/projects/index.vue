<template>
  <div class="container mx-auto p-12px">
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
        <div class="p-12px w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex" v-for="item of items" :key="item.name"> 
          <Card  v-bind="item" class="w-full mx-auto"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Projects",
      description: "Projects",
      items: [
        {
          description:
            "Eudits is an auditing platform that enables technical users to complete complex audits performed by people.",
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
        {
          color: "#f8f8f8",
          description:
            "Artist & palaeontologist from Brisbane, Australia. Big fan of marsupials, bugs, & ancient supercontinents. Gondwanarama on Etsy!",
          image: "https://daim.dev/img/portfolio/gondwanarama.com.jpg",
          links: [
            {
              url: "https://gondwanarama.com/",
            },
            // {
            //   "icon": "mdi:github",
            //   "link": "https://github.com/shadow81627/gondwanarama",
            //   "tooltip": "Github"
            // }
          ],
          name: "Gondwanarama",
          startDate: "2021-05-30T07:40:07Z",
        },
        {
          color: "#d8c8b8",
          description: "Handyman services for the local area.",
          image:
            "https://daim.dev/img/portfolio/www.hardingspropertyservices.com.png",
          links: [
            {
              url: "https://www.hardingspropertyservices.com/",
              tooltip: "Website",
            },
            // {
            //   "icon": "mdi:github",
            //   "link": "https://github.com/shadow81627/hardingspropertyservices",
            //   "tooltip": "Github"
            // }
          ],
          name: "Harding's Property Services",
          startDate: "2022-02-12T00:10:25Z",
        },
        {
          color: "#f8f8f8",
          description:
            "Govhack project that combines two creative commons datasets to detail care requirements for Brisbane City Councils Free Native Plant Program.",
          image:
            "https://daim.dev/img/portfolio/brisbane-city-council-free-native-plants.daim.dev_species.png",
          links: [
            {
              url: "https://brisbane-city-council-free-native-plants.daim.dev",
              tooltip: "Website",
            },
            // {
            //   "icon": "mdi:github",
            //   "link": "https://github.com/shadow81627/brisbane-city-council-free-native-plants",
            //   "tooltip": "Github"
            // }
          ],
          name: "Plant Gallery",
          startDate: "2020-08-07T01:08:52Z",
        },
        {
  "color": "#f8f8f8",
  "description": "Personal site, portfolio and blog.",
  "image": "https://daim.dev/img/portfolio/daim.dev.png",
  "links": [
    {
      "url": "https://daim.dev",
      "tooltip": "Website"
    },
    // {
    //   "icon": "mdi:github",
    //   "link": "https://github.com/shadow81627/daim",
    //   "tooltip": "Github"
    // }
  ],
  "name": "Daim",
  "startDate": "2019-11-29T21:53:05Z"
}

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
