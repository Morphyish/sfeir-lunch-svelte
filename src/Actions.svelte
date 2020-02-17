<script>
    import Dislike from './cheats/Dislike.svelte'
    import Like from './cheats/Like.svelte'

    import { createEventDispatcher } from 'svelte'

    export let disabled

    const dispatch = createEventDispatcher()
</script>

<div class="actions">
    <Dislike on:click={() => dispatch('dislike')} {disabled} />
    <Like on:click={() => dispatch('like')} {disabled} />
</div>

<style>
    .actions {
        display: flex;
        height: 20vh;
    }
</style>
