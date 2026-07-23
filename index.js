//typing image actions
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


//project image actions
const streaker = document.getElementById("streaker-pro-img");
const expense = document.getElementById("expense-pro-img");
const onepiece = document.getElementById("onepiece-pro-img");
const recipe = document.getElementById("recipe-pro-img");
const prname = document.getElementById("project-name");
const prdescription = document.getElementById("project-description");
const prtechnologies = document.getElementById("tech");
const prdefaultimg = document.getElementById("projects-default-img");
const prcontent = document.getElementById("overview-content");

streaker.addEventListener("mouseover", (e)=>{
    mOver("Streak Maintainer","Streak Maintainer is a web application designed to help users build and maintain consistency in their daily tasks and habits. Inspired by calendar-based streak tracking, users can set a target duration for a task and mark each day as completed by clicking on the corresponding date. Completed days are visually highlighted to represent the active streak. The application also tracks continuous streaks, completed dates, missed dates, and overall progress, allowing users to monitor their consistency and stay motivated toward achieving their goals.");
    // prname.textContent = "Streak Maintainer"
    // prdescription.textContent = "Streak Maintainer is a web application designed to help users build and maintain consistency in their daily tasks and habits. Inspired by calendar-based streak tracking, users can set a target duration for a task and mark each day as completed by clicking on the corresponding date. Completed days are visually highlighted to represent the active streak. The application also tracks continuous streaks, completed dates, missed dates, and overall progress, allowing users to monitor their consistency and stay motivated toward achieving their goals."
    // prdefaultimg.style.display="none";
})

streaker.addEventListener("mouseout",(e)=>{
    mOut();
})


expense.addEventListener("mouseover", (e)=>{
    mOver("Expense Tracker", "Expense Tracker is a web application developed to simplify personal expense management and overcome the limitations of traditional calculators. While calculating expenses, users often enter only numbers and later forget what each amount represents. This application allows users to enter expenses along with descriptions, such as ₹10 (Lays) + ₹50 (Travel), making it easier to understand and track spending.After completing the calculation, the application generates a bill-like summary displaying each expense with its description and amount. Users can also update existing expense entries, making it convenient to manage and maintain accurate expense records." );
    // prname.textContent = "Expense Tracker"
    // prdescription.textContent = "Expense Tracker is a web application developed to simplify personal expense management and overcome the limitations of traditional calculators. While calculating expenses, users often enter only numbers and later forget what each amount represents. This application allows users to enter expenses along with descriptions, such as ₹10 (Lays) + ₹50 (Travel), making it easier to understand and track spending.After completing the calculation, the application generates a bill-like summary displaying each expense with its description and amount. Users can also update existing expense entries, making it convenient to manage and maintain accurate expense records."
})
expense.addEventListener("mouseout",(e)=>{
    mOut();
})

onepiece.addEventListener("mouseover", (e)=>{
    mOver("One-piece", "One Piece Anime Website is a visually engaging web application created to explore and improve my CSS, UI design, and frontend development skills. The website uses attractive colors and a creative layout to provide an engaging user experience for anime fans. It provides an overview of the One Piece storyline and introduces the main characters and cast, allowing users to explore information about the anime in an interactive and visually appealing interface.")
    // prname.textContent = "One-piece"
    // prdescription.textContent = "One Piece Anime Website is a visually engaging web application created to explore and improve my CSS, UI design, and frontend development skills. The website uses attractive colors and a creative layout to provide an engaging user experience for anime fans. It provides an overview of the One Piece storyline and introduces the main characters and cast, allowing users to explore information about the anime in an interactive and visually appealing interface."
})
onepiece.addEventListener("mouseout",(e)=>{
    mOut();
})

recipe.addEventListener("mouseover", (e)=>{
    mOver("Recipe", "Recipe Website is a user-friendly web application developed to enhance my CSS, UI design, and frontend development skills. The website provides a collection of recipes organized into categories such as Appetizers, Main Course, and Desserts.Each recipe includes a description and detailed preparation instructions, with options for both vegetarian and non-vegetarian dishes. The application focuses on creating an attractive and easy-to-navigate interface while presenting recipes in a clear and organized manner." )
    // prname.textContent = "Recipe"
    // prdescription.textContent = "Recipe Website is a user-friendly web application developed to enhance my CSS, UI design, and frontend development skills. The website provides a collection of recipes organized into categories such as Appetizers, Main Course, and Desserts.Each recipe includes a description and detailed preparation instructions, with options for both vegetarian and non-vegetarian dishes. The application focuses on creating an attractive and easy-to-navigate interface while presenting recipes in a clear and organized manner." 
})
recipe.addEventListener("mouseout",(e)=>{
    mOut();
})


function mOver(name, description){
    prcontent.classList.remove("overview-default");
    prname.textContent = name;
    prdescription.textContent = description;
    prdefaultimg.style.display="none";
}

function mOut(){
    prcontent.classList.add("overview-default");
    prdefaultimg.style.display="block";
}

