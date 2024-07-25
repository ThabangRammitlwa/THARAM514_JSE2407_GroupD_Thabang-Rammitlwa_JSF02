<script>
    import { createEventDispatcher } from 'svelte';
  
    export let products = [];
    export let activeCategory = 'all';
    export let activeSort = 'default';
  
    const dispatch = createEventDispatcher();
  
    $: filteredProducts = products
      .filter(product => activeCategory === 'all' || product.category === activeCategory)
      .sort((a, b) => {
        if (activeSort === 'lowest') return a.price - b.price;
        if (activeSort === 'highest') return b.price - a.price;
        return 0;
      });
  
    function selectProduct(product) {
      dispatch('selectProduct', product);
    }
  </script>
  
  <div class="product-grid">
    {#each filteredProducts as product (product.id)}
      <div class="product-card" on:click={() => selectProduct(product)}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.category}</p>
      </div>
    {/each}
  </div>
  
  <style>
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  
    .product-card {
      border: 1px solid #ddd;
      padding: 10px;
      cursor: pointer;
    }
  
    .product-card img {
      max-width: 100%;
      height: 200px;
      object-fit: contain;
    }
  </style>