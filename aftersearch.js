document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Sample data
    const data = [
        {
            image: "../imageVamos/nice.jpg",
            city: "Nice",
            date: "May 5 - 10",
            transport: 1,
            activity: 1,
            ticket: 1,
            visa: 1,
            location: "La Promenade des Anglais",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Arrispectif",
            agencyName: "TravelCo",
            agencyRating: 4,
            link: "nice.html" // Link to the new page
        },
        {
            image: "../imageVamos/paris.jpg",
            city: "Paris",
            date: "June 1 - 7",
            transport: 1,
            activity: 0,
            ticket: 1,
            visa: 0,
            location: "Eiffel Tower",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "City of Light",
            agencyName: "ExploreMore",
            agencyRating: 5,
            link: "paris.html" // Link to the new page
        },
        {
            image: "../imageVamos/rome.jpg",
            city: "Rome",
            date: "July 10 - 15",
            transport: 1,
            activity: 1,
            ticket: 0,
            visa: 0,
            location: "Colosseum",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Eternal City",
            agencyName: "Wanderlust",
            agencyRating: 3,
            link: "rome.html" // Link to the new page
        },
        {
            image: "../imageVamos/barcelona.jpg",
            city: "Barcelona",
            date: "August 20 - 25",
            transport: 0,
            activity: 1,
            ticket: 1,
            visa: 1,
            location: "Sagrada Familia",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "Gaudi's Masterpiece",
            agencyName: "TravelCo",
            agencyRating: 4,
            link: "barcelona.html" // Link to the new page
        },
        {
            image: "../imageVamos/london.jpg",
            city: "London",
            date: "September 5 - 10",
            transport: 1,
            activity: 0,
            ticket: 1,
            visa: 1,
            location: "Big Ben",
            resortImage: "../imageVamos/resort.png",
            rating: 5,
            title: "Historic Landmarks",
            agencyName: "ExploreMore",
            agencyRating: 5,
            link: "london.html" // Link to the new page
        },
        {
            image: "../imageVamos/berlin.jpg",
            city: "Berlin",
            date: "October 15 - 20",
            transport: 0,
            activity: 1,
            ticket: 0,
            visa: 0,
            location: "Brandenburg Gate",
            resortImage: "../imageVamos/resort.png",
            rating: 4,
            title: "Cultural Hub",
            agencyName: "Wanderlust",
            agencyRating: 3,
            link: "berlin.html" // Link to the new page
        }
    ];

    // Function to populate a card
    const populateCard = (card, item) => {
        const cardImage = card.querySelector(".card-image");
        cardImage.src = item.image;
        cardImage.alt = item.location;

        card.querySelector(".city-name").textContent = item.city;
        card.querySelector(".agency-name").textContent = item.agencyName;
        card.querySelector(".date").textContent = item.date;

        // Conditionally add images based on values
        if (item.transport === 1) {
            card.querySelector(".transport-icon").src = "../imageVamos/transport.png";
        } else {
            card.querySelector(".transport-info").style.display = "none";
        }

        if (item.activity === 1) {
            card.querySelector(".activity-icon").src = "../imageVamos/activity.png";
        } else {
            card.querySelector(".activity-info").style.display = "none";
        }

        if (item.ticket === 1) {
            card.querySelector(".ticket-icon").src = "../imageVamos/ticket.png";
        } else {
            card.querySelector(".ticket-info").style.display = "none";
        }

        if (item.visa === 1) {
            card.querySelector(".visa-icon").src = "../imageVamos/visa.png";
        } else {
            card.querySelector(".visa-info").style.display = "none";
        }

        card.querySelector(".location span").textContent = item.location;
        card.querySelector(".resort-image").src = item.resortImage;
        card.querySelector(".rating").textContent = item.rating;

        // Set agency rating
        const agencyRatingElement = card.querySelector(".agency-rating");
        agencyRatingElement.innerHTML = "";
        for (let i = 0; i < item.agencyRating; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            agencyRatingElement.appendChild(star);
        }

        // Set hotel title
        card.querySelector(".card-title").textContent = item.title;

        // Make the card clickable
        card.addEventListener("click", () => {
            window.location.href = item.link;
        });
    };

    // Populate the container with cards
    const cardTemplate = container.querySelector(".card");
    container.innerHTML = ""; // Clear the container
    data.forEach(item => {
        const card = cardTemplate.cloneNode(true);
        populateCard(card, item);
        container.appendChild(card);
    });

    // Animation when opening the page
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateX(-100vw)";
        setTimeout(() => {
            card.style.transition = "all 1s ease";
            card.style.opacity = 1;
            card.style.transform = "translateX(0)";
        }, index * 200); // Stagger the animation
    });

    // Additional animation on hover for cards
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.classList.add("card-hover");
        });
        card.addEventListener("mouseout", () => {
            card.classList.remove("card-hover");
        });
    });

    // Fade-in effect for images
    const images = document.querySelectorAll(".card-image");
    images.forEach(image => {
        image.style.opacity = 0;
        setTimeout(() => {
            image.style.transition = "opacity 1s ease";
            image.style.opacity = 1;
        }, 500);
    });

    // Generate stars based on rating with animation
    const ratings = document.querySelectorAll(".rating");
    ratings.forEach(rating => {
        const ratingValue = parseInt(rating.textContent.trim());
        rating.innerHTML = "";
        for (let i = 0; i < ratingValue; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            star.style.opacity = 0;
            star.style.transition = `opacity 0.5s ease ${i * 0.2}s`;
            rating.appendChild(star);
            setTimeout(() => {
                star.style.opacity = 1;
            }, i * 200);
        }
    });

    // Set the username
    const username = "Amine"; // This can be dynamically set
    document.querySelector(".username").textContent = username;
});