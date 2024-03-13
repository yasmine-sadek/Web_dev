<main>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
  
      h1 {
        text-align: center;
      }
  
      courses {
        display: flex; /* Change to flex for stacking */
        flex-direction: column; /* Stack courses vertically */
        align-items: center; /* Center courses horizontally */
      }
      .course {
        padding: 2rem;
        border-radius: 50px;
        cursor: pointer;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        transition: all 0.5s ease;
      }
  
      .course a {
        /* Target the anchor tag within the course */
        text-decoration: none; /* Remove underline from link */
        color: inherit; /* Inherit color from parent (course) */
      }
  
      .course:hover {
        letter-spacing: 3px;
        background-color:  #3498db;
        color: hsl(0, 0%, 100%);
        box-shadow: #3498db;
  
      }
  
      h2 {
        letter-spacing: 3px;
        background-color: hsl(261deg 80% 48%);
        color: hsl(0, 0%, 100%);
        box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
        transform: translateY(10px);
        transition: 100ms;
      }
    </style>
</main>