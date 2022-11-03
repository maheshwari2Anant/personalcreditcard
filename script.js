const cardno = document.querySelector(".number")
const namehere = document.getElementsByTagName("input")
const fname = document.getElementById("yourname")
const lname = document.getElementById("Ysurname")

const cv = document.getElementById("cardcv")

fname.addEventListener("input",() => {nameheres("fName",fname.value.toUpperCase())})
lname.addEventListener("input",()=>{nameheres("lName",lname.value.toUpperCase())})



cardno.style.color = "yellow"
cv.style.color = "black"

const randomnumber =()=>{

    let random = Math.floor((Math.random()*1E16));
//    random.toString();
    cardno.style.letterSpacing = "2px"
    // random.match(/.{1,4}/g);
    .toUpperCase();
    cardno.innerHTML = random;
}


const nameheres=(id, value)=>{

     document.getElementById(id).innerHTML = value;

       
}


const updatecv=()=>{
    let newno=Math.floor(Math.random()*1E3);
    cv.innerHTML = newno

}

updatecv();











randomnumber();