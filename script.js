let backToTopbutton = document.getElementById("BackToTop");
window.onscroll = function () {
    if ((document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100)) {
        backToTopbutton.style.display = "flex";
    }
    else {
        backToTopbutton.style.display = "none";
    }
}
backToTopbutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

// Announcement Boxes
let a = document.getElementById("btn1");
a.addEventListener("click", (event) => {
    let a_btn = document.getElementById("ann-box");
    a_btn.style.display = "block";
    event.stopPropagation();
})
document.addEventListener("click", (event) => {
    let a_btn = document.getElementById("ann-box");
    if (a_btn.style.display === "block" && !a_btn.contains(event.target)) {
        a_btn.style.display = "none";
    }
})
let b = document.getElementById("btn2");
b.addEventListener("click", (event) => {
    let b_btn = document.getElementById("chart-box");
    b_btn.style.display = "block";
    event.stopPropagation();
})
document.addEventListener("click", (event) => {
    let b_btn = document.getElementById("chart-box");
    if (b_btn.style.display === "block" && !b_btn.contains(event.target)) {
        b_btn.style.display = "none";
    }
})
let c = document.getElementById("btn3");
c.addEventListener("click", (event) => {
    let c_btn = document.getElementById("company-box");
    c_btn.style.display = "block";
    event.stopPropagation();
})
document.addEventListener("click", (event) => {
    let c_btn = document.getElementById("company-box");
    if (c_btn.style.display === "block" && !c_btn.contains(event.target)) {
        c_btn.style.display = "none";
    }
})
let d = document.getElementById("btn4");
d.addEventListener("click", (event) => {
    let d_btn = document.getElementById("form-box");
    d_btn.style.display = "block";
    event.stopPropagation();
})
document.addEventListener("click", (event) => {
    let d_btn = document.getElementById("form-box");
    if (d_btn.style.display === "block" && !d_btn.contains(event.target)) {
        d_btn.style.display = "none";
    }
})
window.onload = () => {
    document.getElementById("button1").classList.add("clicked");
    updateCardContent("Button 1", "This is the content for Button 1.", [
        { id: "actionButton1", text: "Action 1" },
        { id: "actionButton2", text: "Action 2" }
    ]);
}

document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");

    const card = document.getElementById("chapter-card");
    const cardHeading = document.getElementById("chapter-card-heading");
    const cardText = document.getElementById("chapter-card-content");
    const actionButton1 = document.getElementById("actionButton1");
    const actionButton2 = document.getElementById("actionButton2");

    function updateCardContent(heading, text, buttons) {
        cardHeading.innerText = heading;
        cardText.innerText = text;

        
        buttons.forEach((button) => {
            const buttonElement = document.getElementById(button.id);
            if (buttonElement) {
                buttonElement.innerText = button.text;
            }
        });
    }

    
    button1.addEventListener("click", function () {
        actionButton1.style.display="inline-block";
        updateCardContent(
            "About NPTEL",
            "The main objective of the National Programme on Technology Enhanced Learning (NPTEL) is to enhance the quality of engineering & science education in the country by developing contents for undergraduate and postgraduate curricula using video and web-based courses.",
            [
                { id: "actionButton1", text: "View Statistics" },
                { id: "actionButton2", text: "Read More" }
            ]
        );
    });

    
    button2.addEventListener("click", function () {
        button1.classList.remove("clicked");
        actionButton1.style.display="inline-block";
        updateCardContent(
            "SPOKEN TUTORIALS",
            "The Spoken Tutorial project is the initiative of the ‘Talk to a Teacher’ activity of the National Mission on Education through Information and Communication Technology (ICT), launched by the Ministry of Human Resources and Development.",
            [
                { id: "actionButton1", text: "View Statistics" },
                { id: "actionButton2", text: "Read More" }
            ]
        );
    });

    button3.addEventListener("click", function () {
        button1.classList.remove("clicked");
        actionButton1.style.display="none";
        updateCardContent(
            "Institution’s Innovation Council (IIC)",
            "To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in a time-bound fashion and organize Hackathons, idea competitions, mini-challenges, etc. with the involvement of industries.",
            [
                { id: "actionButton1", text: "Read More" }
            ]
        );
    });

    button4.addEventListener("click", function () {
        button1.classList.remove("clicked");
        actionButton1.style.display="none";
        updateCardContent(
            "CISCO",
            "CISCO Trainings @ Department of Computer Science & Engineering, MVSR Engineering College, Hyderabad, Telangana, India.",
            [
                { id: "actionButton1", text: "Read More" }
            ]
        );
    });
});
