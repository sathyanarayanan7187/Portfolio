const quickInfo = document.getElementById("base-info-img");
const imgBox = document.getElementById("giffer-default");
const consoleBox = document.getElementById("base-info-img-proto");
quickInfo.addEventListener('mouseover', (e)=>{
    imgBox.classList.remove("giffer-enable");
    imgBox.classList.add("giffer-disable");
    imgBox.style.display = "none";
    consoleBox.classList.remove("console-disable");
    consoleBox.classList.add("giffer-enable");
    consoleBox.style.display = "block";
})


quickInfo.addEventListener('mouseout', (e)=>{
    imgBox.classList.remove("giffer-disable");
    imgBox.classList.add("giffer-enable");
    imgBox.style.display = "block";
    consoleBox.classList.add("console-disable");
    consoleBox.classList.remove("giffer-enable");
    consoleBox.style.display = "none";
})