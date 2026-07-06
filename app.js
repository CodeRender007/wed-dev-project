const apiURL = "https://demohotelsapi.pythonanywhere.com/hotels/";

const hotelContainer = document.getElementById("hotelContainer");

async function loadHotels() {
    hotelContainer.innerHTML = "<h2>Loading Hotels...</h2>";

    try {
        const response = await fetch(apiURL);
        const result = await response.json();

        hotelContainer.innerHTML = "";

        const hotels = result.data.slice(0, 6);

        hotels.forEach(hotel => {

            hotelContainer.innerHTML += `
                <div class="card">

                    <img src="${hotel.thumbnail}" alt="${hotel.name}">

                    <div class="card-body">

                        <h3>${hotel.name}</h3>

                        <p class="location">
                             ${hotel.location}
                        </p>

                        <p class="rating">
                             ${hotel.rating}
                        </p>

                        <p class="price">
                            ₹${Math.round(hotel.price)}
                        </p>

                        <a href="hotel.html?id=${hotel.id}" class="details-btn">
                            View Details
                        </a>

                    </div>

                </div>
            `;
        });

    } catch (error) {

        hotelContainer.innerHTML = `
            <h2>
                Failed to load hotels.
            </h2>
        `;

        console.log(error);
    }
}

loadHotels();