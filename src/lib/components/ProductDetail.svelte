<script>
  /**
   * @file ProductDetail.svelte
   * @description A component that displays detailed information about a single product.
   */
  
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  
  /**
   * @property {number} id - The unique identifier of the product
   * @property {string} title - The name of the product
   * @property {string} description - A detailed description of the product
   * @property {number} price - The price of the product
   * @property {string} category - The category the product belongs to
   * @property {string} image - The URL of the product image
   * @property {Object} rating - The rating information of the product
   * @property {number} rating.rate - The average rating of the product
   * @property {number} rating.count - The number of ratings received
   */
  

  export let id;
  
  let product = null;
  
  /** @type {boolean} */
  let loading = true;
  
  /**
   * Lifecycle function that runs when the component is mounted.
   * It calls the fetchProduct function to load the product data.
   */
  onMount(async () => {
      await fetchProduct();
  });
  
  /**
   * Fetches the product data from the API.
   * @async
   * @function fetchProduct
   * @throws {Error} If there's an error fetching the product data
   */
  async function fetchProduct() {
      try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
              throw new Error('Failed to fetch product data');
          }
          product = await response.json();
      } catch (error) {
          console.error('Error fetching product:', error);
          product = null;
      } finally {
          loading = false;
      }
  }
  </script>
  
  {#if loading}
      <p>Loading product details...</p>
  {:else if product}
      <div class="product-detail">
          <Link to="/">Back to Products</Link>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
  {:else}
      <p>Product not found</p>
  {/if}
  
  <style>
      .product-detail {
          max-width: 600px;
          margin: 0 auto;
      }
      img {
          max-width: 100%;
          height: 300px;
          object-fit: contain;
      }
      p {
          margin-bottom: 1rem;
          text-align: center;
      }
  </style>