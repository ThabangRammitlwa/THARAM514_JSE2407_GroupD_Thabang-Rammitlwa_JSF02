<script>
    import { createEventDispatcher } from "svelte";

    export let categories = [];


    let selectedCategory = 'all';
    let selectedSort ='default';


    const dispatch = createEventDispatcher();

    function applyFilterSort(){
        dispatch('filterSort',{category:selectedCategory,sort:selectedSort});

    }

    function resetFilters(){
        selectedCategory ='all';
        selectedSort='default';
        applyFilterSort();
    }
</script>

<div class="filter-sort">
<select bind:value={selectedCategory} on:change={applyFilterSort}>
    <option value="all">All categories</option>
    {#each categories as category}
    <option value={category}>{category}</option>
    {/each}
</select>


    <select bind:value={selectedSort} on:change={applyFilterSort}>
        <option value="default">Default sorting</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
    </select>

<button on:click={resetFilters}>Reset Filter</button>

</div>



