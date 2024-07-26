<script>
    export let title = "My Fashion Stop";
  </script>
  
  <header>
    <h1>{title}</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Login</a></li>
      
      </ul>
    </nav>
  </header>
  
  <style>
    header {
    background-color: #af9f9f;
    padding: 10px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
     
      
    }
  
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  
    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
  
    nav li {
      margin-left: 1rem;
    }
  
    nav a {
      text-decoration: none;
      color: #333;
    }
  
    nav a:hover {
      text-decoration: underline;
    }
  </style>