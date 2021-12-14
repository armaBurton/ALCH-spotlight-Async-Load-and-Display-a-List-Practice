## ALCH-spotlight-Async-Load-and-Display-a-List-Practice

The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

There are only so many things we do in an app.

Here is a list of the 10 major plain JavaScript patterns. (Links to an external site.)

 Let's practice the 'display a list' and 'render function' patterns using data fetched with the `async fetch on load` pattern. 

### Grading Rubric: 2.5 points per array of items displayed on the site.

- Goal: asynchronously fetch and render 4 separate lists of things to the same index.html file.
- Start with the alchemy web template (Links to an external site.). Don't forget to add the supabase CDN to index.html and make a fetch-utils.js with some good copy paste work to set up the supabase client with the KEY and URL.
- Repeat the following process 4 times, with 4 different domains, all in the same template:
    - Come up with a domain for this data (like 'dogs' or 'candies'). Let's assume you picked 'candies'.
    - In the supabase.io app, create a 'candies' table, Your table should have at least 4 columns.
    - In the supabase.io app, create at least three rows in your table.
    - In your app, in a separate file, write a render function for your domain. Your function should accept one object and returns a DOM element. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.
    - Add a fetch function called `getCandies()` to your fetch-utils.js file to fetch all candies asynchronously.
    - Then, in app.js use `window.addEvenListener('load', () => {})` to fetch and display your data from supabase.
      - In your load event listener, first fetch the data.
      - Then, loop through the fetched array array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.
  - Note: do this process one domain table at a time. Do not write 4 domain tables, then 4 render functions, etc. Please work through the first domain table, then the first render function, then the first display function.
