let currentActiveCategory = "";


function switchView(viewId) {
    document.getElementById('categories-view').classList.add('hidden');
    document.getElementById('query-list-view').classList.add('hidden');
    document.getElementById('query-detail-view').classList.add('hidden');
    
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function renderCategories() {
    const tbody = document.getElementById('category-table-body');
    if (!tbody) return; 
    tbody.innerHTML = ''; 
    
    categories.forEach((cat, index) => {
        const row = document.createElement('tr');
        row.onclick = () => openList(cat);
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${cat}</td>
        `;
        tbody.appendChild(row);
    });
}

function openList(category) {
    currentActiveCategory = category;
    document.getElementById('list-category-title').innerText = "DBMS - " + category;
    
    const filtered = queryData.filter(q => q.category === category);
    
    const tbody = document.getElementById('query-list-table-body');
    tbody.innerHTML = '';

    filtered.forEach((q, index) => {
        const row = document.createElement('tr');
        row.onclick = () => openDetail(q.id);
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${q.title}</td>
        `;
        tbody.appendChild(row);
    });

    switchView('query-list-view');
}
