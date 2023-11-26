function removeCommonLetter(name1,name2) {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    let unique = 0;

    const mp = new Array(26);
    mp.fill(0);

    for (let i = 0; i < name1.length; i++) {
        if(name1[i] != " ") {
            let idx = name1.charCodeAt(i) - "a".charCodeAt(0);
            mp[idx]++;
            unique++;
        }
    }

    for (let i = 0; i < name2.length; i++) {
        if(name2[i] != " ") {
            let idx = name2.charCodeAt(i) - "a".charCodeAt(0);
        
            if(mp[idx] != 0) {
                mp[idx]--;
                unique--;
            } else {
                unique++;
            }
        }

    }

    return unique;    
}

function calculate(len) {
    let flames = ["friends","love","affection","marraige","enemies","siblings"];
    let idx = 0;
   
        while (flames.length > 1) {
            
            let counter = 1;

            while(counter < len) {
               idx = ((idx + 1) % flames.length);
               counter++;
            } 
           
            flames.splice(idx,1);
        }    

   return flames[0];
}

function flames() {

        if(name1.value == "" || name2.value == "") {
            if(name1.value == "") name1.style.border = "2px solid red";
            if(name2.value == "") name2.style.border = "2px solid red";
        } else {
            let len = removeCommonLetter(name1.value,name2.value);
            let relation = calculate(len);
            let url = "images/" + relation + ".jpeg";
            img.setAttribute("src",url);
            img.style.animationName = "ds";
            relationName.textContent = relation;
        }

}

function clear() {
    name1.value = "";
    name2.value = "";
    img.setAttribute("src","images/question mark.jpeg");
    img.style.animationName = "spinner";
    relationName.textContent = "Relationship";
}

function removeBorder1() {
    name1.removeAttribute("style");
}

function removeBorder2() {
    name2.removeAttribute("style");
}

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let submitBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");
let img  = document.getElementById("relationImg");
let relationName  = document.getElementById("relationName");

submitBtn.addEventListener("click",flames);
clearBtn.addEventListener("click",clear);
name1.addEventListener("click",removeBorder1);
name2.addEventListener("click",removeBorder2);



