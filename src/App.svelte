<script>
 
  import { onMount } from 'svelte';
  import Header from './lib/components/Header.svelte';
  import ProductGrid from './lib/components/ProductGrid.svelte'
  import ProductDetail from './lib/components/ProductDetail.svelte';
  import FilterSort from './lib/components/FilterSort.svelte';

  let products = [];
  let categories = [];
  let selectedProduct = null;
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

  function handleProductSelect(event) {
    selectedProduct = event.detail;
  }

  function handleBack() {
    selectedProduct = null;
  }

  function handleFilterSort(event) {
    const { category, sort } = event.detail;
    activeCategory = category;
    activeSort = sort;
  }
</script>

<main>
 {#if loading}
 <p>Loading...</p>
 {:else if selectedProduct}
 <ProductDetail
 product={selectedProduct}
 on:back={handleBack} 
 />
 {:else}
 <FilterSort 
   {categories} 
   on:filterSort={handleFilterSort}
 />
 <ProductGrid 
   {products} 
   {activeCategory} 
   {activeSort}
   on:selectProduct={handleProductSelect}
 />
{/if}
</main>