let arrayOfPosts

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPosts()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => (arrayOfPosts = posts))
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  clearChildren()
  const allPosts = document.getElementById("all-posts")
  arrayOfPosts.map((post, index) => {
    const li = document.createElement("li")
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    )
    li.appendChild(text)
    allPosts.append(li)
    h3.innerText = "All Posts"
  })
}
const fetch5Post = () => {
  clearChildren()
  const allPosts = document.getElementById("all-posts")
  arrayOfPosts.map((post, index) => {
    if (index < 6) {
      const li = document.createElement("li")
      const text = document.createTextNode(
        `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
      )
      li.appendChild(text)
      allPosts.append(li)
      h3.innerText = "First 5 Posts"
    }
  })
}
const displayComments = () => {
  clearChildren()
  const allPosts = document.getElementById("all-posts")
  arrayOfPosts.map((post, index) => {
    const li = document.createElement("li")
    const text = document.createTextNode(`#${index}, Comments: ${post.body}:`)
    li.appendChild(text)
    allPosts.append(li)
    h3.innerText = "Comments"
  })
}
const displayUserIDs = () => {
  clearChildren()
  const allPosts = document.getElementById("all-posts")
  arrayOfPosts.map((post, index) => {
    const li = document.createElement("li")
    const text = document.createTextNode(`#${index}: user ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
    h3.innerText = "User IDs"
  })
}

const clearChildren = () => {
  let poop = document.getElementById("all-posts")
  while (poop.firstChild) {
    poop.removeChild(poop.firstChild)
  }
}

// Your job now is to follow the functions above and use them as templates to build the functionality that the buttons in the index.html file already have laid out. This way you can learn how to build fetch requests and work with other APIs and become a real developer!!
