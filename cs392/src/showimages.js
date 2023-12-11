const savedAttractions = [
    { name: 'New York', introduction: 'the most densely populated major city in the United States', image: 'pic/st.jpg', fontSize: '22px', fontWeight: 'bold'},
    { name: 'Los Angeles', introduction: 'The majority of the city proper lies in a basin in Southern California ', image: 'pic/la.jpg',fontSize: '22px', fontWeight: 'bold' },
    { name: 'San Francisco', introduction: 'the commercial, financial, and cultural center of Northern California.', image: 'pic/sf.jpg',fontSize: '22px', fontWeight: 'bold' },
    { name: 'Chichago', introduction: ' the most populous city in the Midwest. As the seat of Cook County, the second-most populous county ', image: 'pic/ch.jpg', fontSize: '22px', fontWeight: 'bold'},
    { name: 'Boston', introduction: 'the capital and most populous city in the Commonwealth of Massachusetts, and is the cultural & financial center of New England', image: 'pic/bs.jpg', fontSize: '22px', fontWeight: 'bold'}

    // Add more saved attractions as needed
];

const attractionList = document.getElementById('attractionList');
const attractionDetails = document.getElementById('attractionDetails');

// Populate the list of attractions
savedAttractions.forEach((attraction, index) => {
    const attractionDiv = document.createElement('div');
    attractionDiv.className = 'attraction list-group-item list-group-item-action';

    // Add image to each attraction
    const imageElement = document.createElement('img');
    imageElement.src = attraction.image;
    imageElement.alt = attraction.name;
    attractionDiv.appendChild(imageElement);

    // Add text content and click event
    const textContent = document.createElement('div');
    textContent.className = 'attraction-text';
    textContent.innerHTML = `<strong>${attraction.name}</strong><p>${attraction.introduction}</p>`;
    attractionDiv.appendChild(textContent);
    attractionDiv.addEventListener('click', () => displayAttractionDetails(index));

    attractionList.appendChild(attractionDiv);
});

//  display attraction details
function displayAttractionDetails(index) {
    const selectedAttraction = savedAttractions[index];

    // Update the right side with attraction details
    attractionDetails.innerHTML = `
                <h2 class="mb-4">${selectedAttraction.name}</h2>
                <img src="${selectedAttraction.image}" alt="${selectedAttraction.name}" class="img-fluid mb-4">
                <p>${selectedAttraction.introduction}</p>
            `;
}