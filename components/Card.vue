<template>
  <div class="rounded-lg shadow-lg bg-white flex flex-col grow self-stretch min-w-240px max-w-360px">
    <img
      class="rounded-t-lg h-216px"
      :src="image"
      alt=""
      :width="imageWidth"
      :height="imageHeight"
      :aspect-ratio="imageWidth / imageHeight"
      :style="`background-color: ${_imageBackgroundColor}`"
    />
    <div class="p-6 flex grow flex-col self-stretch">
      <div class="text-gray-900 text-xl font-medium mb-2">{{ name }}</div>
      <p class="text-gray-700 text-base mb-4">
        {{ description }}
      </p>
      <Link
        class="ml-2 flex justify-end self-end justify-self-end mt-auto"
        v-for="link in links"
        v-bind="link"
        :key="link"
      >
        <span class="i-carbon-new-tab text-gray w-24px h-24px my-auto"></span>
      </Link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: { type: Object, default: null },
    dark: { type: Boolean, default: false },
    acronym: { type: String, default: undefined },
    image: { type: String, default: undefined },
    url: { type: String, default: undefined },
    icon: { type: [String, Object], default: () => undefined },
    name: { type: String, default: undefined },
    subheading: { type: String, default: undefined },
    description: { type: String, default: undefined },
    list: { type: Array, default: undefined },
    links: { type: Array, default: undefined },
    plans: { type: Array, default: undefined },
    startDate: { type: String, default: undefined },
    endDate: { type: String, default: undefined },
    imageHeight: { type: Number, default: 360 },
    imageWidth: { type: Number, default: 640 },
    imageQuality: { type: Number, default: 100 },
    imageColor: { type: String, default: "#fff" },
    imageBackgroundColor: { type: String, default: null },
    imageFit: {
      type: String,
      default: "inside",
      validator: (val) =>
        ["cover", "contain", "inside", "outside"].includes(val),
    },
    iconColor: { type: String, default: "grey" },
  },
  computed: {
    _imageBackgroundColor() {
      return this.imageBackgroundColor ?? this.imageColor;
    },
    lazy() {
      const svg = Buffer.from(
        `<svg xmlns='http://www.w3.org/2000/svg'
      viewBox='00512512'>
      <rect width="100%" height="100%" fill="${this._imageBackgroundColor}"/>
      </svg>`,
      ).toString("base64");
      return `data:image/svg+xml;base64,${svg}`;
    },
  },
};
</script>
