/*
let blogs = document.createElement('div');
document.querySelector('.blog').hasAttribute('class', 'blog');
let blogsbox = document.querySelector('.blog');

document.append(blogs)
function Blogscard(title, image, para, link) {
  // Tab to edit
  blogsbox.innerHTML = `
    <img src="${image}" alt="image" width="90%" height="180px">
    <h2>${title}</h2>
    <p>${para}</p>
    <a href="${link}">Read More</a>
`
}


blogsbox.append(blog)

Blogscard("Mastering Time Management", '/pexels-moose-photos-170195-1037993.jpg', "In today's fast-paced world, managing time effectively has become crucial for achieving both personal and professional success.......", '/blog1.html')

Blogscard("My Website ", "/logo.jpg", "How I created my Website", "/blog2.html"
  
  )
  */
  
  //------+-
  
  // Query the blogs container
let blogsContainer = document.querySelector('.blogs');

function Blogscard(title, image, para, link) {
  // Create a new div element for each blog card
  let blogCard = document.createElement('div');
  blogCard.className = 'blog'; // Optional: Add a class for styling

  // Set the inner HTML of the blog card
  blogCard.innerHTML = `
    <img src="${image}" alt="image" width="90%" height="170px">
    <h2>${title}</h2>
    <p>${para}</p>
    <a href="${link}">Read More</a>
  `;

  // Append the blog card to the blogs container
  blogsContainer.appendChild(blogCard);
}

// Create multiple blog cards


let mybtn = document.getElementById('my-blog');
let aibtn = document.getElementById('ai-blog');

mybtn.addEventListener("click", ()=>{
  
  blogsContainer.innerHTML = '';
  Blogscard("My Website", "../assets/logo.jpg", "How I created my Website", "../blogs/blog00001.html");
Blogscard("My Website", "../assets/logo.jpg", "How I created my Website", "/blog2.html");
})


aibtn.addEventListener("click", ()=>{
  blogsContainer.innerHTML = '';
  Blogscard("Mastering Time Management", '../assets/pexels-moose-photos-170195-1037993.jpg', "In today's fast-paced world, managing time effectively has become crucial for achieving both personal and professional success.......", '../blogs/blog00001.html');
})




/*
let blogsContainer = document.querySelector('.blogs');

function Blogscard(title, image, para, link) {
  // Create a new div element for each blog card
  let blogCard = document.createElement('div');
  blogCard.className = 'blog'; // Optional: Add a class for styling

  // Set the inner HTML of the blog card
  blogCard.innerHTML = `
    <img src="${image}" alt="image" width="90%" height="170px">
    <h2>${title}</h2>
    <p>${para}</p>
    <a href="${link}">Read More</a>
  `;

  // Append the blog card to the blogs container
  blogsContainer.appendChild(blogCard);
}

// Create multiple blog cards

let mybtn = document.getElementById('my-blog');
let aibtn = document.getElementById('ai-blog');

mybtn.addEventListener("click", () => {
  // Clear the existing blog content
  blogsContainer.innerHTML = '';
  Blogscard("My Website", "/logo.jpg", "How I created my Website", "/blog2.html");
  Blogscard("My Website", "/logo.jpg", "How I created my Website", "/blog2.html");
});

aibtn.addEventListener("click", () => {
  // Clear the existing blog content
  blogsContainer.innerHTML = '';
  Blogscard("Mastering Time Management", '/pexels-moose-photos-170195-1037993.jpg', "In today's fast-paced world, managing time effectively has become crucial for achieving both personal and professional success.......", '/blog1.html');
});
*/