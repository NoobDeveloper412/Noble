<script>
  import { Button } from '@atoms'
  const defaultClass = $$props.class || 'text-primary-300'
</script>

<Button {...$$props}>
  <img src="/icons/burger.svg" class={`fill-current ${defaultClass}`} />
</Button>
