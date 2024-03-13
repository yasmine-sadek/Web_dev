<script lang="ts">
    import type { ActionData } from "./$types";
  
    export let form: ActionData;
  </script>

<form method="POST"><h1>Create Course</h1>
    {#if form?.missing}<p class="error">Missing field required!</p>{/if}
    <input
        name="courseId"
        placeholder="Course Code"
        type="text"
        value={form?.courseId ?? ""}
    />
    <input
        name="title"
        placeholder="Course Title"
        type="text"
        value={form?.title ?? ""}
    />
    <button  type="submit">Create Course</button>
    <a class="back" href="/Courses"> or Cancel </a>
</form>
 
<style>
            h1{
            margin-left:1em;
        }
        .back {
            color:#3498db   ;
        }
        input{
            padding:2em;
            padding-right:20em;
            border-radius: 2em;
            color:black;
            background-color:white;
            letter-spacing: 2px;
            display: block;
            margin-left:3em;
            margin-top:1em;
    
        
        }
        button {
            padding:1em;
            border-radius: 2em;
            color:black;
            background-color:white;
            letter-spacing: 2px;
            margin-left:3em;
            margin-top:1em;
            cursor: pointer;
        }
        button:hover {
            color:white;
            background-color:#3498db;
            
        }
</style>