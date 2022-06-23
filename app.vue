<template>
  <Html lang="en-AU" itemscope itemtype="https://schema.org/WebPage">
    <div class="min-h-screen flex flex-col justify-start body">
      <Navigation />
      <div class="flex justify-start self-stretch h-full grow relative">
        <div
          id="sidenav"
          class="self-stretch flex grow flex-col min-h-full absolute sm:relative"
        ></div>
        <div
          class="w-full flex-col grow self-stretch flex-wrap"
        >
          <main
            itemprop="mainContentOfPage"
            itemtype="https://schema.org/WebPageElement"
            class="flex grow self-stretch min-h-screen"
          >
            <NuxtPage />
          </main>
          <footer class="flex">
            <p>
              <span>Site by </span>
              <a href="https://daim.dev" class="underline" target="_blank">Daim Digital</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </Html>
</template>
