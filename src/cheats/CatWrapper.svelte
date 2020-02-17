<div class="wrapper">
    <slot />
</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        overflow: hidden;
        background: #333;
        color: #fff;
    }

    .wrapper :global(img) {
        max-width: 100vw;
        max-height: 80vh;
        margin: auto;
    }
</style>
