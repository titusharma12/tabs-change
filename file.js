var Tab1 = document.getElementById("pathlogy-plan");
var Tab2 = document.getElementById("radiology-plan");
var Tab3 = document.getElementById("diagnostic-plan");
function TabChanged(e) {
  if (e.id === "Tab1") {
    Tab1.style.display = "block";
    Tab2.style.display = "none";
    Tab3.style.display = "none";
    e.classList.add("active");
    e.parentElement.parentElement.children[1].children[0].classList.remove("active");
    e.parentElement.parentElement.children[2].children[0].classList.remove("active");
    isBillingChecked();
  } 
  else if (e.id === "Tab2") {
    Tab1.style.display = "none";
    Tab2.style.display = "block";
    Tab3.style.display = "none";
    e.classList.add("active");
    e.parentElement.parentElement.children[0].children[0].classList.remove("active");
    e.parentElement.parentElement.children[2].children[0].classList.remove("active");
    isBillingChecked();
  } 
  else if (e.id === "Tab3") {
    Tab1.style.display = "none";
    Tab2.style.display = "none";
    Tab3.style.display = "block";
    e.classList.add("active");
    e.parentElement.parentElement.children[0].children[0].classList.remove("active");
    e.parentElement.parentElement.children[1].children[0].classList.remove("active");
    isBillingChecked();
  }
}


function isBillingChecked() {
    let billingChk = document.getElementById("billingOnly");
    let tabIndex = 0;
    if(document.getElementById("Tab1").classList.contains("active")) tabIndex = 0;
    else if(document.getElementById("Tab2").classList.contains("active")) tabIndex = 1;
    else if(document.getElementById("Tab3").classList.contains("active")) tabIndex = 2;
       
    let formRow = document.querySelectorAll(".form-row")[tabIndex];
    let childNodes = formRow.children;
    let length = childNodes[0].children[0].children[0].children.length;
  if (billingChk.checked) 
  {
    for (let i = 0; i < length; i++) 
    {
        if (childNodes[0].children[0].children[0].children[i].innerText.includes("Laboratory reports") ||
            childNodes[0].children[0].children[0].children[i].innerText.includes("USG reports") ||
            childNodes[0].children[0].children[0].children[i].innerText.includes("Digital X-ray reports"))
            {
                childNodes[0].children[0].children[0].children[i].style =
                "display:none !important";
            }
    }
  }
  else{
    for (let i = 0; i < length; i++) 
    {
        if (childNodes[0].children[0].children[0].children[i].innerText.includes("Laboratory reports") ||
            childNodes[0].children[0].children[0].children[i].innerText.includes("USG reports") ||
            childNodes[0].children[0].children[0].children[i].innerText.includes("Digital X-ray reports"))
            {
                childNodes[0].children[0].children[0].children[i].style =
                "display:block";
            }
    }
  }
}
