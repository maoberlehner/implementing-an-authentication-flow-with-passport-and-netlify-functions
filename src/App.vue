<template>
  <div
    class="o-container o-container--m o-vertical-spacing o-vertical-spacing--xxl"
    :class="$style.main"
  >
    <h1>
      Implementing an Authentication Flow with Passport and Netlify Functions
    </h1>
    <p>
      <template v-if="user">
        Hello {{ user }}!<br>
        <small>(Clear your cookies if you want to try again.)</small>
      </template>
      <template v-else>
        <a href="/.netlify/functions/auth/github">
          Please log in
        </a>
      </template>
    </p>
  </div>
</template>

<script>
async function quickFetch(endpoint) {
  let data;
  try {
    const response = await fetch(endpoint, {
      credentials: `include`,
      headers: {
        'Content-Type': `application/json`,
      },
    });
    data = await response.json();
  } catch (error) {
    data = { error };
  }
  return data;
}

export default {
  name: `App`,
  data() {
    return {
      user: false,
    };
  },
  async created() {
    const status = await quickFetch(`/.netlify/functions/auth/status`);
    this.user = status.email;
  },
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
  text-align: center;
}
</style>
