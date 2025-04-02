document.addEventListener("DOMContentLoaded", () => {
    
   

   
    let testCards = document.querySelectorAll(".testing-card, .test-card");
    testCards.forEach(card => {
        card.addEventListener("click", () => {
            let confirmBooking = confirm(`Do you want to book: ${card.textContent.trim()}?`);
            if (confirmBooking) {
                alert(`Your booking for ${card.textContent.trim()} is confirmed!`);
            }
        });
    });

    let viewAll = document.querySelector(".vital_organ_test a");
    let vitalContainer = document.querySelector(".vital_organ_test");
    let extraTests = ["Pancreas", "Brain", "Skin", "Eyes"];
    
    viewAll.addEventListener("click", (event) => {
        event.preventDefault();
        extraTests.forEach(test => {
            let newCard = document.createElement("div");
            newCard.classList.add("test-card");
            newCard.textContent = test;
            vitalContainer.appendChild(newCard);
        });
        viewAll.style.display = "none"; 
    });

    
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

