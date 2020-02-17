<script>
    export let disabled
</script>

<button type="button" on:click {disabled}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M50,89.4c51.4-26.3,55.8-54.4,45.5-67.7C84.4,7.5,61.1,4.8,50,26.1C38.9,4.8,15.6,7.5,4.5,21.7C-5.8,35-1.4,63.1,50,89.4z"/>
    </svg>
</button>

<style>
    button {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        margin: 0;
        color: #CA1873;
    }

    button[disabled] {
        color: #ccc;
    }

    svg {
        width: 5rem;
    }

    path {
        fill: currentColor;
    }
</style>
