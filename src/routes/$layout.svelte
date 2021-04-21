<script>
  import "../app.postcss";
</script>

<slot />

<style lang="postcss">
  /* TODO: Import fonts if needed */
  /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Orelega+One&display=swap'); */
  /* TODO: Set globals, CSS variables here */

  @layer base {
    font-family: system-ui;
  }
</style>
