const init = () => {
    //Step 1 - Target the DOM Element we want
    const inputForm = document.querySelector("form");
    //Step 2 - add an even listener to the from which is currently  reprensented by inputForm
    inputForm.addEventListener("submit", (e) => { 
        e.preventDefault()
        //console.log(e.target.searchByID.value)
        //You can also do it this way:
        //Step 3 get the input value
        const input = document.querySelector("input#searchByID");
        console.log(input.value); 

         fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");  
            title.innerText = data.title;
            summary.innerText = data.summary;   
        // LOtitle.innerText = data.title;
 
      });
    });
   
}

document.addEventListener('DOMContentLoaded', init);