<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-routing";
  
    export let id;
    let product = null;
    let loading = true;
  
    onMount(async () => {
      await fetchProduct();
    });
  
    async function fetchProduct() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      product = await response.json();
      loading = false;
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

    p{
        margin-bottom: 1rem;
        text-align: center;

    }
  </style>