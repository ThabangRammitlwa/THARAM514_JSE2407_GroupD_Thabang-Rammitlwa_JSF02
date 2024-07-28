<script>
    import { onMount } from 'svelte';
    import ProductGrid from './ProductGrid.svelte';
    import FilterSort from './FilterSort.svelte';

  
    let products = [];
    let categories = [];
    let loading = true;
    let activeCategory = 'all';
    let activeSort = 'default';
  
    onMount(async () => {
      await fetchProducts();
      await fetchCategories();
      loading = false;
    });
  
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      products = await response.json();
    }
  
    async function fetchCategories() {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      categories = await response.json();
    }
  
    function handleFilterSort(event) {
      const { category, sort } = event.detail;
      activeCategory = category;
      activeSort = sort;
    }
  </script>
  
  {#if loading}
    <p>Loading...</p>
  {:else}
    <FilterSort 
      {categories} 
      on:filterSort={handleFilterSort}
    />
    <ProductGrid 
      {products} 
      {activeCategory} 
      {activeSort}
    />
  {/if}