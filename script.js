
var arr =[]
function inputclicked(){
    const text = document.getElementById("input-text").value;
    document.getElementById("input-text").value ="";
     if(text!="")
     {
        var ul = document.getElementById("list");
        var div = document.createElement("div")
        div.classList.add("ulCSS")
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("addCSS")
        li.appendChild(document.createTextNode(text));
        var button = document.createElement("button");
        button.classList.add("buttonCSS")
        button.innerHTML = "Delete";
        div.appendChild(li);
        div.appendChild(button)
        ul.appendChild(div)
     }
    
}


