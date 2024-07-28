<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    let searchTerm = '';
  
    function handleSearch() {
      dispatch('search', searchTerm);
    }
  </script>
  
  <header>
    <div class="header-top">
        <div class="header-content">
          <a href="/" class="logo">AllInOne</a>
          <div class="search-bar">
            <input 
              type="text" 
              placeholder="Search for products" 
              bind:value={searchTerm}
            />
            <button on:click={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
              </svg>
            </button>
          </div>
          <nav class="user-nav">
            <a href="/account">My Account</a>
            <a href="/cart">Cart</a>
          </nav>
        </div>
      </div>



  </header>
  
  <style>
      header {
    background-color: #043655;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .header-top {
    padding: 10px 0;
  }
      
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .search-bar {
    flex-grow: 1;
    margin: 0 20px;
    display: flex;
  }

  .search-bar input {
    flex-grow: 1;
    padding: 10px 0;
    border: none;
    border-radius: 4px 0 0 4px;
  }

  .user-nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }

  .search-bar button {
    background-color: #fdd835;
    border: none;
    padding: 10px 15px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }

  </style>