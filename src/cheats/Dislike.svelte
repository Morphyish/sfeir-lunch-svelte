<script>
    export let disabled
</script>

<button type="button" on:click {disabled}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <line x1="16.2" y1="16.2" x2="83.8" y2="83.8"/>
        <line x1="83.8" y1="16.2" x2="16.2" y2="83.8"/>
    </svg>
</button>

<style>
    button {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        margin: 0;
        color: #333;
    }

    button[disabled] {
        color: #ccc;
    }

    svg {
        width: 5rem;
    }

    line {
        fill: none;
        stroke: currentColor;
        stroke-width: 9;
        stroke-linecap: round;
        stroke-miterlimit: 10;
    }
</style>
