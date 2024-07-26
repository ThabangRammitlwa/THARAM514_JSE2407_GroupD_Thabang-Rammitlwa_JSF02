<script>
  import { Router, Route, Link } from "svelte-routing"; 
  import Header from './lib/components/Header.svelte';
  import ProductDetail from './lib/components/ProductDetail.svelte';
  import Home from "./lib/components/Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <Header />
  
  <div class="content">
    <main>
      <Route path="/" component={Home} />
      <Route path="/product/:id" let:params>
        <ProductDetail id={params.id} />
      </Route>
    </main>
  </div>
</Router>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    text-decoration: none;
  }

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    padding-top: 120px;
  }

  main {
    width: 100%;
  }
</style>