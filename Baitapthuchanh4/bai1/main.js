function toggleDetails() {
    const detailsSection = document.querySelector('.show-details');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.querySelector('.toggle');

    if (detailsSection.style.display === 'none' || detailsSection.style.display === '') {
        detailsSection.style.display = 'block';
        toggleText.textContent = 'Hide details'; 
        toggleIcon.setAttribute('name', 'down-arrow');  
    } else {
        detailsSection.style.display = 'none';
        toggleText.textContent = 'Show details';  
        toggleIcon.setAttribute('name', 'right-arrow');  
    }
}
