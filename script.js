// ===============================
// Mobile Navigation Menu
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });


});





// ===============================
// Active Navbar Highlight
// ===============================


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight)

        {

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(item => {


        item.classList.remove("active");


        if(item.getAttribute("href") === "#" + current)

        {

            item.classList.add("active");

        }


    });



});







// ===============================
// Scroll Animation using Intersection Observer
// ===============================


const animatedElements = document.querySelectorAll(

    ".section, .card, .skill-card, .project-card"

);



const observer = new IntersectionObserver(

(entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting)

        {


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });



},

{

    threshold:0.15

}

);




animatedElements.forEach(element => {


    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";


    element.style.transition = "0.6s ease";


    observer.observe(element);


});







// ===============================
// Contact Form Demo
// ===============================


const contactForm = document.querySelector(".contact-form");


contactForm.addEventListener("submit",(event)=>{


    event.preventDefault();


    alert(

        "Thank you for contacting me! I will get back to you soon."

    );


    contactForm.reset();


});







// ===============================
// Smooth Scroll Enhancement
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click",function(e){


        e.preventDefault();



        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});







// ===============================
// Resume Download Placeholder
// ===============================


// Replace "resume.pdf" with your actual resume file name










// ===============================
// Dynamic Footer Year
// ===============================


const footer = document.querySelector("footer p");


const currentYear = new Date().getFullYear();


footer.innerHTML =

`© ${currentYear} Gopal Warang. All Rights Reserved.`;





// ===============================
// Customization Notes
// ===============================


/*

UPDATE PERSONAL INFORMATION:

1. index.html
   - Change name
   - Change role
   - Update summary
   - Add education details
   - Add projects
   - Add skills
   - Update social links


2. Profile Image:
   - Replace profile.png with your image


3. Resume:
   - Add resume.pdf
   - Update download button link


4. Projects:
   - Copy project-card section
   - Add your own projects


5. Social Links:
   - Replace # with:
       GitHub URL
       LinkedIn URL


*/

