<script lang="ts">
	import type { PageData } from './$types'
    import { page } from '$app/stores';
    import trash from "$lib/trash.png";

	export let data: PageData
    let slug = $page.params.slug
    export let slugAsInt = parseInt(slug, 10);
    
</script>

<h2>Assessments</h2>
<button class="create">Create Assessment</button>

<form action="?/deleteCourse" method="POST">
	<button class = "delete" type="submit">Delete Course</button>
</form>

    
{#each data.feed as course (course.cid)}
    <article>
        {#if course.cid === slugAsInt}
            {#each course.assessments as assessment }
                <div>
                    <p1 class="title">{assessment.title}</p1>
                    <button class="X"><img alt="delete" src="{trash}" class="trash" /></button>
                    <p>Grade: {assessment.grade}</p>
                    <p>Created at: {assessment.date}</p>
                </div>
            {/each}
        {/if}
    </article>
{/each}


<style>
    h2{
        margin-left:3em;
        font-size:30px;
    }
    p,p1{
        margin-left:3em;

    }
    .title{
        transform: translateY(-10px);
        font-weight:bold;
        font-size:1.3em;
        margin-left:2em;
    }
    div{
        font-size:15px;
        padding:0.5em;
        border-radius: 5em;
        color:black;
        background-color:white;
        letter-spacing: 2px;
        margin-left:3em;
        margin-right:3em;
        margin-top:1em;
    }
        
    .X {
        position: absolute; /* Added */
        right: 7em; /* Adjusted */
        transform: translateY(90%); /* Added */
        border-radius: 5em;
        color:black;
        background-color:white;
    }
    .X:hover {
        color:white;
        background-color:red;
        cursor: pointer;
    }

    .delete{
        padding:1em;
        border-radius: 2em;
        color:black;
        background-color:white;
        letter-spacing: 2px;
        margin-left:100em;  
        display: flex; 
        cursor: pointer;
        align-items: flex-end;
        transform: translateY(-150%); /* Added */
    }   
    .create {
        padding:1em;
        display:flex;
        border-radius: 2em;
        color:black;
        background-color:white;
        letter-spacing: 2px;
        margin-left:7em;  
        cursor: pointer;
    }   
    .create:hover {
        color:white;
        background-color: #3498db;
        cursor: pointer;
    }
    .delete:hover {
        color:white;
        background-color:red;
        cursor: pointer;
    }
    .trash{
    width: 30px;
    height: auto;
    
    }
    

</style>