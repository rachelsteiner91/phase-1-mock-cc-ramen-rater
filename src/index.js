// write your code here
//http://localhost:3000 - base URL
//get http://localhost:3000/ramens

//GET /ramens
//GET /ramens/:id

//****CORE DELIVERABLES (CD) */
///// 1. CD 1
//1a. See all ramen images in the div with the id of ramen-menu. 
//1b. When the page loads, request the data from the server to get all the ramen objects. 
//1c. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
const url = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const detailImage = document.querySelector("#ramen-detail .detail-image")
const detailName = document.querySelector("#ramen-detail .name")
const detailRestaurant = document.querySelector("#ramen-detail .restaurant") 
const ratingDisplay = document.getElementById("rating-display")
const commentDisplay = document.getElementById("comment-display")
const ramenForm = document.getElementById("new-ramen")
let ramenImg;
let currentRamen
console.log()

//DRY fetch function
//getData is the same as the getRamen that she used in her code
function getData(url) {
   return fetch("http://localhost:3000/ramens")
   .then(res => res.json())
   .catch(err => console.log(err));
}

   //.then(data => {
      //console.log(data)
      //data.forEach(ramen => {
        // console.log(ramen)

//adds a ramen to the menu bar
function showRamen(ramen){
//console.log(ramen)
//display image for each ramen 
ramenImg = document.createElement('img');
ramenImg.setAttribute('id', ramen.id);
ramenImg.src = ramen.image;
ramenImg.addEventListener("click", () => {
   showDetails(ramen);
});
ramenMenu.appendChild(ramenImg);
}

function showDetails(ramen){
   //populating details div with CURRENT ramen  information
   detailImage.src = ramen.image
   detailName.textContent = ramen.name;
   detailRestaurant.textContent = ramen.restaurant;
   ratingDisplay.textContent = ramen.rating;
   commentDisplay.textContent = ramen.comment;
   currentRamen = ramen.id//update currentRamen to be id of ramen showing details
}

//immediately populates menu with already existing ramens from daatabase on page load
//getData(url) aka getRamen(url)
getData("http://localhost:3000/ramens")
   .then((data) => {
   //populating the menu
   data.forEach((ramen) => showRamen(ramen),//ramen is now one ramen object
   )
//manually showing the details of the FIRST ramen
showDetails(data[0])
}),

//add ramen to the menu
ramenForm.addEventListener("submit", (e) => {
   e.preventDefault();
   let new_ramen = {
      name: e.target.name.value,
      image: e.taraget.name.value,
      restaurant: e.target.restaurant.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
   };
   showRamen(new_ramen);
})
//all of the const is needd because of the new ramen and also new- .... look at the core delvierables to know what you need 

////// 2. CD 2
//Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

////////CD 3*****
///////*******Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page. */


getData()

//note: with the above code, I can't click on the image for the ramen to switch details


////******BELOW SEE FROM MY CODE CHALLENEGE PRACTICE FAIL */


//FETCH
//Access information from an API using a GET request, use it to update the DOM

//document.addEventListener('DOMContentLoaded', () => {

//GET
    //function getRamens() {
        //return fetch('http://localhost:3000/ramens')
       // .then(resp => resp.json()) // always what I am going to do.
        //.then(ramens => {
           // ramensArr = ramens;
           // currentRamen = ramensArr[0]

           // ramensArr.map(ramens => {
             //   addImgToNav(ramens)
       // })
           // ramenDetail(currentRamen)
   //})
//}

//SEE all ramen images in the div with the id of ramen-menu
//function seeRamenMenu(){
   // const ramenMenu = document.getElementById("div#ramen-menu")
   // const ramenImg = document.createElement('img');
    //ramenImg.src = ramens.image,
   // ramenImg.alt = ramens.name,
   //ramenImg.id = 'ramen-menu',
   // console.log(seeRamenMenu)

    //ramenMenu.appendChild(ramenImg)

    //ramenImg.addEventListener('click', () => {
       // ramenDetail(ramens)
       // currentRamen = ramens
     //} )
   
  //  });
//document.querySelector('#ramen-menu').addEventListener('click', getRamens);

//details
//

//ramen details
//onst imgDetail = document.querySelector("#ramen-detail ////#ramen-image")

//function createNewRamen(){
   // const newRamen = document.querySelector
//}

//Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.



//create new Ramen Form

//seeRamenMenu()
//addImgToNav()
//seeRamenMenu()

    
////******* NOTES : I should have stayed much more organized with this, I started to get lost and forgot where I was in the code */
////////See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
//****What I was thinking: show list of ramen options with the id of ramen-menu. then include prevent.default 

//***Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
//create event listener for the click image from the ramen-menu div 

//***Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
//what i Was thinking: create event listener for the new-ramen form with "submit" click event 