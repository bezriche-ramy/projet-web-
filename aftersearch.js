document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Sample data
    const data = [
        {
            image: "../imageVamos/nice.jpg",
            city: "Nice",
            countryIcon: "../imageVamos/france.png",
            date: "May 5 - 10",
            transportIcon: "../imageVamos/bus.png",
            location: "La Promenade des Anglais",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Arrispectif"
        },
        {
            image: "../imageVamos/paris.jpg",
            city: "Paris",
            countryIcon: "../imageVamos/france.png",
            date: "June 1 - 7",
            transportIcon: "../imageVamos/train.png",
            location: "Eiffel Tower",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "City of Light"
        },
        {
            image: "../imageVamos/rome.jpg",
            city: "Rome",
            countryIcon: "../imageVamos/italy.png",
            date: "July 10 - 15",
            transportIcon: "../imageVamos/plane.png",
            location: "Colosseum",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Eternal City"
        },
        {
            image: "../imageVamos/barcelona.jpg",
            city: "Barcelona",
            countryIcon: "../imageVamos/spain.png",
            date: "August 20 - 25",
            transportIcon: "../imageVamos/bus.png",
            location: "Sagrada Familia",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "Gaudi's Masterpiece"
        },
        {
            image: "../imageVamos/london.jpg",
            city: "London",
            countryIcon: "../imageVamos/uk.png",
            date: "September 5 - 10",
            transportIcon: "../imageVamos/train.png",
            location: "Big Ben",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Historic Landmarks"
        },
        {
            image: "../imageVamos/berlin.jpg",
            city: "Berlin",
            countryIcon: "../imageVamos/germany.png",
            date: "October 15 - 20",
            transportIcon: "../imageVamos/plane.png",
            location: "Brandenburg Gate",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "Cultural Hub"
        }
    ];

    // Function to create a card
    const createCard = (item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.location}" class="card-image">
            <div class="header">
                <div class="title-with-icon">
                    <span class="city-name">${item.city}</span>
                    <img src="${item.countryIcon}" alt="Country icon" class="contry-icon">
                </div>
            </div>
            <div class="date">${item.date}</div>
            <div class="transport-info">
                <img src="${item.transportIcon}" alt="Transport icon" class="transport-icon">
            </div>
            <div class="location">
                <div class="group-photo">
                    <img src="../imageVamos/Group (1).png" alt="Group photo">
                </div>
                ${item.location}
            </div>
            <div class="resort-info-line">
                <img src="${item.resortImage}" alt="Resort View" class="resort-image">
                <div class="rating">${item.rating}</div>
            </div>
            <div class="card-title">${item.title}</div>
            <img src="../imageVamos/next.png" alt="Next" class="arrow">
        `;

        return card;
    };

    // Populate the container with cards
    data.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });

    // Animation when opening the page
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        setTimeout(() => {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200); // Stagger the animation
    });

    // Additional animation on hover for arrows
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        arrow.style.transition = "transform 0.3s ease";
        arrow.addEventListener("mouseover", () => {
            arrow.style.transform = "translateX(10px)";
        });
        arrow.addEventListener("mouseout", () => {
            arrow.style.transform = "translateX(0)";
        });
    });

    // Additional animation on hover for cards
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Generate stars based on rating
    const ratings = document.querySelectorAll(".rating");
    ratings.forEach(rating => {
        const ratingValue = parseInt(rating.textContent.trim());
        rating.innerHTML = "";
        for (let i = 0; i < ratingValue; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            rating.appendChild(star);
        }
    });
});