let myLeads = []
const inputEl = document.getElementById("input-el")//reference to the input element
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
//document --> object
//getElementbyId("") --> method
//<input id = "input-btn"> --> element
//inputBtn --> variable that stores the reference
// to the element with the concerned ID

inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    inputEl.value = ""
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

function render(){
    let listItems = ""
    for(let i = 0;i<myLeads.length;i++){
    listItems += `<li>
                    <a href = ${myLeads[i]} target = _blank> 
                            ${myLeads[i]} 
                    </a> 
                  </li>`//using html in js using .innerHTML
    }
    ulEl.innerHTML = listItems //productivity has increased as we have only called the method only once instead of every single time for each iteration of the for loop
}








