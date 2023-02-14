var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var name = "light.css";
    if(element.getAttribute("href")=="dark.css"){
        var name = "light.css";
        element.setAttribute("href","light.css");
    }
    else{
        var name = "dark.css";
        element.setAttribute("href","dark.css");
    }

    // 1 (c) Determine new stylesheet file name
    
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)

    localStorage.setItem("main", name);
    
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var loc = localStorage.getItem("main");
    
    // 2 (b) get html style element by ID
    const element = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    element.setAttribute("href", loc);
}


