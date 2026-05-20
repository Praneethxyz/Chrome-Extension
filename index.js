// chrome://extensions/
let myLeads = []
let myArse  = ["notagoodwebsite.cum","ashleelwebsite.come"]
const inputEl = document.getElementById("input-el")//reference to the input element
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
//document --> object
//getElementbyId("") --> method
//<input id = "input-btn"> --> element
//inputBtn --> variable that stores the reference
// to the element with the concerned ID

// localStorage.setItem("mename",100) //storing the key-value pair in the local storage
// console.log(localStorage.getItem("mename"))
// localStorage.clear()
//we are using localStorage to keep the items even after refreshing or such

const myLeadsLS =JSON.parse(localStorage.getItem("myArray"))// we are redefining the variable everytime so const does work here
if(myLeadsLS) {
    myLeads = myLeadsLS
    render()//If I do not add this, then the websites are not gonna show up on the page despite myLeads containing all of the array element from before the reload
    //because if I do not render, then I'm just not making that list and updating the ul element's text
}
// console.log(myLeadsLS)
// console.log(typeof myLeadsLS) an array is a special type of object, it is giving a generalized data type of object when doing typeof

const delBtn = document.getElementById("del-btn")
delBtn.addEventListener("dblclick", function(){
    myLeads = []
    //maybe show some paragraph to confirm if the user wants to delete the data
    render()
})

// const tabs = [
//     {url: "https://www.linked.com/in/my-name"}
// ]
//tabs --> variable
//{...} --> object literal
//tabs is an array consisting of one element, which is a JS object and 
//Not all objects contain every method. 
//for ex: Document object model(DOM / document) contains a method .getElementById() or .getItem()
//But the above object tabs[0] doesn't have the methods.
//That is because, when we created tabs[0] we only created the property "url" and no methods
//so any method we call on that object will give undefined in the console

tabBtn.addEventListener("click",function(){
    
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
        //  console.log(tabs)    
        myLeads.push(tabs[0].url) //I only need to modify myLeads outside render(), rest of it will be done inside the render() function
        render()
        //also tabs[0].url gives us the required link to push in myLeads because, only one tab can be active in the Current Window, so tabs array consists of only one object

    })//only for active chrome tabs(not the tabs array that we defined above) and only for the current window's active tabs
   
    // console.log(tabs[0].url)
}) //slightly different in the sense that SAVE INPUT saves the webs that we input in the input field
//And Save TAB directly saves the link that is on the browser at that instant

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    inputEl.value = "" //clearing the input field after typing out the required lead
    render()
    // for(let i = 0;i<myLeads.length;i++){
    //     const li = document.createElement("li")
    //     li.textContent = myLeads[i]
    //     ulEl.append(li)
    // }
    //another method to render html tags in js, using .createElement("")


})
//use .addEventListener("event",function(){}) instead of defining a function at onclick and then defining a function for that
//This would simply listen to the event of the concerned element and render the function defined
//This is refactoring of code? A: YES

function render(leads = myLeads){
    let listItems = ""
    for(let i = 0;i<leads.length;i++){
    listItems += `<li>
                    <a href = ${leads[i]} target = _blank> 
                            ${leads[i]} 
                    </a> 
                  </li>`//using html in js using .innerHTML

    // localStorage.setItem(i,`${myLeads[i]}`)
    // console.log(localStorage.getItem(`${i}`))
    // localStorage.clear() good when you have only one array , but generally you would want to store the entire array which can be found by a single key

}
//for every change in myLeads, the local storage also changes this way
//But if we do not want to do that then we would have to remove this from the render() and keep in the event listener for the inputBtn
    localStorage.setItem("myArray" , JSON.stringify(myLeads))
    console.log(JSON.parse(localStorage.getItem("myArray")))    
  ulEl.innerHTML = listItems //productivity has increased as we have only called the method only once instead of every single time for each iteration of the for loop
}
//.parse --> unstrings the array .stringify --> stringifies the array

document.getElementById("check-btn").addEventListener("click",function(){
    render()
    render(myArse)
})




