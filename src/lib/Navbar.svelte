<script>
    import logo from "$lib/Logo.png";
    let activeTab = ''; // Set this variable dynamically based on the current page or tab
</script>

<!-- This is the navigation bar -->
<nav>
    <a href="/" class:active={activeTab === 'Home'} on:click={() => activeTab = 'Home'}>
        <img alt="logo" src="{logo}" class="logo" />
    </a>
    <ul>
        <li class="nav-item">
            <a href="/" class:active={activeTab === 'Home'} on:click={() => activeTab = 'Home'}>Home</a>
        </li>
        <li class="nav-item">
            <a href="/Courses" class:active={activeTab === 'Courses'} on:click={() => activeTab = 'Courses'}>Courses</a>
        <!-- </li>
        <li class="nav-item">
            <a href="./Blogs" class:active={activeTab === 'Blogs'} on:click={() => activeTab = 'Blogs'}>Blogs</a>
        </li>
        <li class="nav-item">
            <a href="./Tracker" class:active={activeTab === 'Tracker'} on:click={() => activeTab = 'Tracker'}>Tracker</a> -->
        </li>
    </ul>
</nav>

<!-- Styling for Navigation bar -->
<style>
    nav {
        background: linear-gradient(to right, #3498db, #2980b9);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        margin-left: 20px;
        width: 50px;
        height: auto;
    }

    ul {
        display: flex;
        list-style: none;
    }

    .nav-item {
        margin-right: 15px;
        text-align: center;
    }

    li a {
        text-decoration: none;
        font-weight: bold;
        color: white;
        transition: color 0.3s, background-color 0.3s, border-color 0.3s;
        border: 2px solid transparent;
        padding: 10px 15px;
        border-radius: 5px;
    }

    li a:hover {
        color: #3498db;
        background-color: white;
        border-color: #3498db;
    }

    li a.active {
        color: #3498db; /* Adjust the color for the active tab */
        background-color: white;
        border-color: #3498db;
    }

    :global(body){
        font-family: 'Nunito', sans-serif;
        background: rgba(228, 225, 225, 0.701);
        margin:0;
        padding:0;
    }
</style>
