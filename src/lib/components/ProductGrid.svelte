<script>
    import {Link} from "svelte-routing";

  
    export let products = [];
    export let activeCategory = 'all';
    export let activeSort = 'default';
  
    $: filteredProducts = products
      .filter(product => activeCategory === 'all' || product.category === activeCategory)
      .sort((a, b) => {
        if (activeSort === 'lowest') return a.price - b.price;
        if (activeSort === 'highest') return b.price - a.price;
        return 0;
      });
  </script>
  
  <div class="product-grid">
    {#each filteredProducts as product (product.id)}
        <Link to={`/product/${product.id}`} class="product-link">
            <div class="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>{product.category}</p>
            </div>
        </Link>
    {/each}
</div>

  
  <style>
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }

    .product-link {
        text-decoration: none;
        color: inherit;
        display: block;
        height: 100%;
    }

    .product-card{
    border: 1px solid #ddd;
    border-radius: 20px;
    padding:0px;
    height: 100%;
    transition: background-color 0.3s ease;
    
    }
    .product-card:hover{
        background-color: rgba(185, 197, 203, 0.655);
    }
  
    .product-card img {
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin: 10px;
  }
 
  </style>