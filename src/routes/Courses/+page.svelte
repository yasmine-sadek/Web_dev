<script lang="ts">
	import type { PageData } from './$types'
  import { goto } from "$app/navigation";
	export let data: PageData
  export let form

</script>

<h>Courses</h>
<button on:click={() => goto(`/Create`)}>Create</button>
<div>
    {#each data.feed as course (course.cid)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <article on:click={() => goto(`/Courses/${course.cid}`)}>
                        <ul>
                <li class="course">
                    <p>{course.courseId} {course.title}</p>
                </li>
            </ul>
        </article>
    {/each}
</div>

<style>
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
      margin-right: 2em;
    }

    .course p {
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

    h {
      font-size: 20px;
      letter-spacing: 3px;
      transform: translateY(35px);
      transition: 100ms;
      margin-left: 3em;
      display: flex;
    }
    
    button {
        padding:1em;
        border-radius: 2em;
        color:black;
        background-color:white;
        letter-spacing: 2px;
        margin-left:13em;  
        cursor: pointer;

    }
    button:hover {
        color:white;
        background-color:#3498db;
    }
  </style>
