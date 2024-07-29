<script>
  // Importing necessary functions and components
  import { onMount } from 'svelte';
  import ProductGrid from './ProductGrid.svelte';
  import FilterSort from './FilterSort.svelte';

  /**
   * @type {Array<Object>}
   * @description An array to store the list of products fetched from the API.
   */
  let products = [];

  /**
   * @type {Array<string>}
   * @description An array to store the list of product categories fetched from the API.
   */
  let categories = [];

  /**
   * @type {boolean}
   * @description A flag to indicate whether the data is still loading.
   */
  let loading = true;

  /**
   * Lifecycle function that runs after the component is first rendered.
   * It fetches the products and categories from the API.
   */
  onMount(async () => {
    await fetchProducts();
    await fetchCategories();
    loading = false;
  });

  /**
   * Fetches the list of products from the API and updates the `products` array.
   * @async
   * @function
   */
  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  }

  /**
   * Fetches the list of product categories from the API and updates the `categories` array.
   * @async
   * @function
   */
  async function fetchCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    categories = await response.json();
  }

</script>

<!-- Conditional rendering based on the loading state -->
{#if loading}
  <p>Loading...</p>
{:else}
  <!-- Render the FilterSort component, passing the categories as a prop -->
  <FilterSort {categories} />

  <!-- Render the ProductGrid component, passing the products as a prop -->
  <ProductGrid {products} />
{/if}
