document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Sample data
    const data = [
        {
            image1: "../imageVamos/nice.jpg",
            Destination: "Nice",
            date_depart: "2023-05-05",
            date_retour: "2023-05-10",
            Transport: true,
            Activités: true,
            billet_avion: true,
            visa: true,
            location: "La Promenade des Anglais",
            image2: "../imageVamos/resort.png",
            rating: 5,
            nom_hotel: "Arrispectif",
            agence: {
                nom: "TravelCo",
                rating: 4
            },
            id: 1
        },
        {
            image1: "../imageVamos/paris.jpg",
            Destination: "Paris",
            date_depart: "2023-06-01",
            date_retour: "2023-06-07",
            Transport: true,
            Activités: false,
            billet_avion: true,
            visa: false,
            location: "Eiffel Tower",
            image2: "../imageVamos/resort.png",
            rating: 4,
            nom_hotel: "City of Light",
            agence: {
                nom: "ExploreMore",
                rating: 5
            },
            id: 2
        },
        {
            image1: "../imageVamos/rome.jpg",
            Destination: "Rome",
            date_depart: "2023-07-10",
            date_retour: "2023-07-15",
            Transport: true,
            Activités: true,
            billet_avion: false,
            visa: false,
            location: "Colosseum",
            image2: "../imageVamos/resort.png",
            rating: 5,
            nom_hotel: "Eternal City",
            agence: {
                nom: "Wanderlust",
                rating: 3
            },
            id: 3
        },
        {
            image1: "../imageVamos/barcelona.jpg",
            Destination: "Barcelona",
            date_depart: "2023-08-20",
            date_retour: "2023-08-25",
            Transport: false,
            Activités: true,
            billet_avion: true,
            visa: true,
            location: "Sagrada Familia",
            image2: "../imageVamos/resort.png",
            rating: 4,
            nom_hotel: "Gaudi's Masterpiece",
            agence: {
                nom: "TravelCo",
                rating: 4
            },
            id: 4
        },
        {
            image1: "../imageVamos/london.jpg",
            Destination: "London",
            date_depart: "2023-09-05",
            date_retour: "2023-09-10",
            Transport: true,
            Activités: false,
            billet_avion: true,
            visa: true,
            location: "Big Ben",
            image2: "../imageVamos/resort.png",
            rating: 5,
            nom_hotel: "Historic Landmarks",
            agence: {
                nom: "ExploreMore",
                rating: 5
            },
            id: 5
        },
        {
            image1: "../imageVamos/berlin.jpg",
            Destination: "Berlin",
            date_depart: "2023-10-15",
            date_retour: "2023-10-20",
            Transport: false,
            Activités: true,
            billet_avion: false,
            visa: false,
            location: "Brandenburg Gate",
            image2: "../imageVamos/resort.png",
            rating: 4,
            nom_hotel: "Cultural Hub",
            agence: {
                nom: "Wanderlust",
                rating: 3
            },
            id: 6
        }
    ];

    // Function to populate a card
    const populateCard = (card, item) => {
        const cardImage = card.querySelector(".card-image");
        cardImage.src = item.image1;
        cardImage.alt = item.Destination;

        card.querySelector(".city-name").textContent = item.Destination;
        card.querySelector(".agency-name").textContent = item.agence.nom;
        card.querySelector(".date").textContent = `${item.date_depart} - ${item.date_retour}`;

        // Conditionally add images based on values
        if (item.Transport) {
            card.querySelector(".transport-icon").src = "../imageVamos/transport.png";
        } else {
            card.querySelector(".transport-info").style.display = "none";
        }

        if (item.Activités) {
            card.querySelector(".activity-icon").src = "../imageVamos/activity.png";
        } else {
            card.querySelector(".activity-info").style.display = "none";
        }

        if (item.billet_avion) {
            card.querySelector(".ticket-icon").src = "../imageVamos/ticket.png";
        } else {
            card.querySelector(".ticket-info").style.display = "none";
        }

        if (item.visa) {
            card.querySelector(".visa-icon").src = "../imageVamos/visa.png";
        } else {
            card.querySelector(".visa-info").style.display = "none";
        }

        card.querySelector(".location span").textContent = item.location;
        card.querySelector(".resort-image").src = item.image2;
        card.querySelector(".rating").textContent = item.rating;

        // Set agency rating
        const agencyRatingElement = card.querySelector(".agency-rating");
        agencyRatingElement.innerHTML = "";
        for (let i = 0; i < item.agence.rating; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            agencyRatingElement.appendChild(star);
        }

        // Set hotel title
        card.querySelector(".card-title").textContent = item.nom_hotel;

        // Make the card clickable
        card.addEventListener("click", () => {
            window.location.href = `/voyages/${item.id}/`;
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