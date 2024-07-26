<script>
    import {createEventDispatcher} from 'svelte'

    export let product;

    const dispatch = createEventDispatcher();

    function goBack(){
        dispatch('back');
    }
</script>

<div class =" product-detail">
    <button on:click={goBack}>Back to Products</button>
    <h1>{product.name}</h1>
    <img src={product.image} alt={product.title}/>
    <p>{product.description}</p>
    <p>Price: ${product.price.toFixed(2)}</p>
    <p>Category: {product.category}</p>
    <p>Rating: {product.rating.rate} ({product.rating.count}reviews)</p>
</div>

<style>
    .product-detail {
        max-width:600;
        margin: 0 auto;

      
        }

        img{
            max-width:100%;
            height:300px;
            object-fit:contain;
        }
</style>