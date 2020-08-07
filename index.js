let arrayOfPeople
const allPosts = document.getElementById("all-posts")
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPosts()
  setTimeout(displayStuff, 400)
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPeople
const getPosts = () => {
  fetch("https://randomuser.me/api/?results=400")
    .then((res) => res.json())
    .then((users) => (arrayOfPeople = users.results))
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPeople)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayStuff = function () {
  arrayOfPeople.map((person) => {
    const li = document.createElement("li")
    const text = document.createTextNode(
      `${person.name.first} ${person.name.last} 
      //CONTACT//: ${person.email}`
    )
    li.appendChild(text)
    allPosts.append(li)
  })
  h3.innerText = "All Posts"
}
const displayPost = () => {
  clearChildren()
  displayStuff()
}

const displayDOB = () => {
  clearChildren()
  arrayOfPeople.map((person) => {
    const li = document.createElement("li")
    const text = document.createTextNode(
      `${person.name.first} ${person.name.last} DOB: ${person.dob.date} AGE: ${person.dob.age}`
    )
    li.appendChild(text)
    allPosts.append(li)
  })
  h3.innerText = "DOB"
}
const displayLocation = () => {
  clearChildren()
  arrayOfPeople.map((person) => {
    const li = document.createElement("li")
    const text = document.createTextNode(
      `${person.name.first} ${person.name.last} LOCATION: ${person.location.city} AGE: ${person.dob.age}`
    )
    li.appendChild(text)
    allPosts.append(li)
  })
  h3.innerText = "LOCATION"
}
const displayPhotoIDs = () => {
  clearChildren()
  arrayOfPeople.map((person) => {
    const li = document.createElement("li")
    const photo = document.createElement("img")
    photo.src = person.picture.large
    const text = document.createTextNode(
      `${person.name.first} ${person.name.last}'s Photo`
    )
    li.appendChild(photo)
    li.appendChild(text)
    allPosts.append(li)
  })
  h3.innerText = "User IDs"
}

const clearChildren = () => {
  let poop = document.getElementById("all-posts")
  while (poop.firstChild) {
    poop.removeChild(poop.firstChild)
  }
}

// Your job now is to follow the functions above and use them as templates to build the functionality that the buttons in the index.html file already have laid out. This way you can learn how to build fetch requests and work with other APIs and become a real developer!!
