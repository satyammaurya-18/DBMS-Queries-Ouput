const grid = document.getElementById('queryGrid');

// This clears the grid and adds a card for every item in your data.js
function displayPrograms(data) {
    grid.innerHTML = ''; 
    data.forEach(item => {
        const card = `
            <a href="details.html?id=${item.id}" class="bg-gray-800 p-5 rounded-lg border-l-4 border-orange-600 hover:bg-gray-700 transition">
                <span class="text-xs text-orange-500 font-bold">${item.category}</span>
                <h4 class="text-lg font-semibold mt-1">${item.title}</h4>
                <p class="text-sm text-gray-400 mt-2 line-clamp-2">${item.desc}</p>
            </a>
        `;
        grid.innerHTML += card;
    });
}

// Initial call to show all 60+ queries
displayPrograms(queryData);