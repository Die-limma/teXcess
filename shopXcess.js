document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = '#f0f0f0'; 
    
    var headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.style.color = '#333333'; 
    });

    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#FF5733'; 
        button.style.color = '#FFFFFF'; 
    });

    setTimeout(function() {
        alert("Welcome to TeXcess! Enjoy browsing our latest electronics and accessories.");
    }, 1000); 

    document.addEventListener('click', function(event) {
        console.log("Element clicked: ", event.target);
    });
});
