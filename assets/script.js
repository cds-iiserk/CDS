$(function(){
    $("#header-section").load("header.html");
    $("#footer-section").load("footer.html");
});

async function fetchPublications() {
    const response = await fetch('./assets/helper/publications.json');
    return response.json();
}

function generatePublicationList(publications) {
    const container = document.getElementById('publications-container');

    // Get the years and sort them in descending order
    const years = Object.keys(publications).sort((a, b) => b - a);

    // Create divs for each year and its publications
    years.forEach(year => {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'publication-year text-center';
        yearDiv.textContent = year;
        yearDiv.id = `year-${year}`
        container.appendChild(yearDiv);

        for (const paper in publications[year]) {
            const publication = publications[year][paper];
            // const authors = publication.author.join(', ');
            const authors = publication.author.length > 0 ? ` - ${publication.author.join(', ')}` : '';

            publication.link.forEach((url, index) => {
                const publicationDiv = document.createElement('div');
                publicationDiv.className = 'publication-item card text-center';
                const linkNumber = publication.link.length > 1 ? ` [Link ${index + 1}]` : '';
                // publicationDiv.textContent = `${paper}${linkNumber} - ${authors}`;
                publicationDiv.textContent = `${paper}${linkNumber}${authors}`;

                publicationDiv.onclick = () => {
                    window.open(url, '_blank');
                };

                container.appendChild(publicationDiv);
            });
        }
    });
}

// window.onload = async () => {
//     const publications = await fetchPublications();
//     generatePublicationList(publications);
// };

window.onload = async () => {
    if (window.location.pathname.includes('publication.html')) {
        const publications = await fetchPublications();
        generatePublicationList(publications);
    }
};