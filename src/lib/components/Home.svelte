<script>
    import { onMount } from 'svelte';
    import ProductGrid from './ProductGrid.svelte';
    import FilterSort from './FilterSort.svelte';
  import { activeCategory, activeSort } from '../../store';
    

  
    let products = [];
    let categories = [];
    let loading = true;
   
  
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
  
  </script>
  
  {#if loading}
    <p>Loading...</p>
  {:else}
    <FilterSort 
      {categories} 
    />
    <ProductGrid 
      {products} 
     
    />
  {/if}