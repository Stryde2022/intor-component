const firstName = document.getElementsByName("first-name")[0];
const lastName = document.getElementsByName("last-name")[0];
const emailAddress = document.getElementsByName("email-address")[0];
const password = document.getElementsByName("password")[0];


const warning1 = document.querySelector(".warning1");
const warning2 = document.querySelector(".warning2");
const warning3 = document.querySelector(".warning3");
const warning4 = document.querySelector(".warning4");

const errorImg1 = document.querySelector(".error1");
const errorImg2 = document.querySelector(".error2");
const errorImg3 = document.querySelector(".error3");
const errorImg4 = document.querySelector(".error4");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formEvent = document.querySelector("form");

formEvent.addEventListener ("submit", function validateForm(e) {
    
    if (firstName.value === ""){
        warning1.classList.remove("hide");
        errorImg1.classList.remove("hide");
        e.preventDefault();
    }

    if (lastName.value === "") {
        warning2.classList.remove("hide");
        errorImg2.classList.remove("hide");
        e.preventDefault();
    }

    if (!emailPattern.test(emailAddress.value)) {
        warning3.classList.remove("hide");
        errorImg3.classList.remove("hide");
        e.preventDefault();
    }

    if (password.value === "") {
        warning4.classList.remove("hide");
        errorImg4.classList.remove("hide");
        e.preventDefault();
    }
});



firstName.addEventListener("input", function() {
    console.log("error states removed");
    warning1.classList.add("hide");
    errorImg1.classList.add("hide");
})

lastName.addEventListener("input", function() {
    console.log("error states removed");
    warning2.classList.add("hide");
    errorImg2.classList.add("hide");
})

emailAddress.addEventListener("input", function() {
    console.log("error states removed");
    warning3.classList.add("hide");
    errorImg3.classList.add("hide");
});

password.addEventListener("input", function() {
    console.log("error states removed");
    warning4.classList.add("hide");
    errorImg4.classList.add("hide");
});