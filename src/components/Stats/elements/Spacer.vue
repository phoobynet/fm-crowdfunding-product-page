<script
  lang="ts"
  setup
>
</script>

<template>
  <div class="spacer">
    <div class="hl" />
    <div class="vl" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .spacer {
    @apply flex flex-col items-center w-full;

    .vl {
      @apply hidden h-[3.9375rem] w-[1rem] border-r-[1px] border-gray-90;
    }

    .hl {
      @apply h-[1rem] w-[5rem] border-b-[1px] border-gray-90;
    }

    @media (min-width: 1440px) {
      @apply -mt-[1rem];
      .vl {
        @apply block;
      }

      .hl {
        @apply hidden w-[4rem];
      }
    }
  }

</style>

