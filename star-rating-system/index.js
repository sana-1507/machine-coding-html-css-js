let stars = document.getElementsByClassName("star-figures");
let rating = document.getElementById("output");

function rate(n) {
    remove();
    let cls = "";
    for(let i=0;i < n ;i++) {
        if(n ==1) stars[i].classList.add("one");
        else if(n == 2) stars[i].classList.add("two");
        else if(n == 3) stars[i].classList.add("three");
        else if(n == 4) stars[i].classList.add("four");
        else if(n == 5) stars[i].classList.add("five");
        stars.className = "star-figures " + cls;
        
    }
    rating.innerText = "Rating is "+n/5;
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star-figures";
        i++;
    }
}