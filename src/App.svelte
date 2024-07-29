<script>
  /**
   * @file App.svelte
   * @description The main application component that sets up routing and layout.
   */
  
  import { Router, Route, Link } from "svelte-routing"; 
  import Header from './lib/components/Header.svelte';
  import ProductDetail from './lib/components/ProductDetail.svelte';
  import Home from "./lib/components/Home.svelte";
  
  /**
   * @type {string}
   * @description The base URL for routing. This is typically set by the application entry point.
   */
  export let url = "";
  </script>
  
  <Router {url}>
    <Header />
    
    <div class="content">
      <main>
        <!-- Home route -->
        <Route path="/" component={Home} />
        
        <!-- Product detail route with dynamic ID parameter -->
        <Route path="/product/:id" let:params>
          <ProductDetail id={params.id} />
        </Route>
      </main>
    </div>
  </Router>
  
  <style>
    /**
     * Global styles applied to the body element
     */
    :global(body) {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      text-decoration: none;
    }
  
    /**
     * Styles for the main content container
     */
    .content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      padding-top: 120px;
    }
  
    /**
     * Styles for the main content area
     */
    main {
      width: 100%;
    }
  </style>