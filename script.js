function filterCards(category) {
    const cards = document.querySelectorAll('.download-card');
    cards.forEach(card => {
        // Vérifie si la catégorie demandée est incluse dans data-category
        const categories = card.dataset.category.split(' '); // Sépare les catégories en tableau
        if (category === 'all' || categories.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
