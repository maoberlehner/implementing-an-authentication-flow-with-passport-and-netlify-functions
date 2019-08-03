<template>
  <div
    class="o-container o-container--m o-vertical-spacing o-vertical-spacing--xxl"
    :class="$style.main"
  >
    <h1>
      Implementing an Authentication Flow with Passport and Netlify Functions
    </h1>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--m,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
</style>

<style lang="scss" module>
@import './assets/scss/settings/**/*';

.main {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
