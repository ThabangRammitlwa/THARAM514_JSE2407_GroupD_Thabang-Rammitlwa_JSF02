<script>
    // Importing necessary functions and stores
    import { navigate } from "svelte-routing";
    import { activeCategory, activeSort } from "../../store";
  
    /**
     * @type {Array<Object>}
     * @description An array of products passed as a prop.
     */
    export let products = [];
  
    /**
     * @type {Array<Object>}
     * @description The filtered and sorted array of products based on the active category and sort order.
     */
    $: filteredProducts = products
      .filter(product => $activeCategory === 'all' || product.category === $activeCategory)
      .sort((a, b) => {
        if ($activeSort === 'lowest') return a.price - b.price;
        if ($activeSort === 'highest') return b.price - a.price;
        return 0;
      });
  
    /**
     * @description Handles the click event on a product link and navigates to the product detail page.
     * @param {Event} event - The click event.
     * @param {number} productId - The ID of the clicked product.
     */
    function handleClick(event, productId) {
      event.preventDefault();
      navigate(`/product/${productId}`);
    }
  </script>
  
  <!-- HTML structure for the product grid -->
  <div class="product-grid">
    {#each filteredProducts as product (product.id)}
      <a href={`/product/${product.id}`} on:click={(e) => handleClick(e, product.id)} class="grid-link">
        <div class="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.category}</p>
        </div>
      </a>
    {/each}
  </div>
  
  <style>
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  
    .grid-link {
      text-decoration: none;
      color: inherit;
    }
  
    .product-card {
      border: 1px solid #ddd;
      border-radius: 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: background-color 0.3s ease;
    }
  
    .product-card:hover {
      background-color: rgba(185, 197, 203, 0.655);
    }
  
    .product-card img {
      max-width: 100%;
      height: 200px;
      object-fit: contain;
      margin-top: 20px;
    }
  
    p {
      text-align: center;
    }
  </style>
  