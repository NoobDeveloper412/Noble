<script>
  const defaultProps = $$props.class || "";
</script>

<button
  on:click
  {...$$props}
  class="flex items-center focus:outline-none outline-none {defaultProps}"
>
  <slot />
</button>
