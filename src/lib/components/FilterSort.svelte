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
    <div class ="select-wrapper">
<select bind:value={selectedCategory} on:change={applyFilterSort}>
    <option value="all">All categories</option>
    {#each categories as category}
    <option value={category}>{category}</option>
    {/each}
</select>
</div>

<div class="select-wrapper">
    <select bind:value={selectedSort} on:change={applyFilterSort}>
        <option value="default">Default sorting</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
    </select>
</div>

<button on:click={resetFilters}>Reset Filter</button>

</div>



<style>

    .filter-sort{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
    padding: 50px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .select-wrapper {
    position: relative;
  }

  .select-wrapper::after {
    font-size: 1rem;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    position: absolute;
    pointer-events: none;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: rgba(171, 164, 164, 0.327);
    border: 1px solid #141313;
    border-radius: 10px;
    padding: 10px 30px 10px 10px;
    font-size: 1rem;
    cursor: pointer;
  }

  select:focus {
    outline: none;
    border-color: #02273d;
  }


  button {
    background-color: #02283f;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0a6aa9;
  }

  @media (max-width: 768px) {
    .filter-sort {
      flex-direction: column;
      align-items: stretch;
    }

    .select-wrapper, button {
      width: 100%;
    }
  }
    
    
</style>