function toggleDetails() {
    const detailsSection = document.querySelector('.show-details');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.querySelector('.toggle');

    if (detailsSection.style.display === 'none' || detailsSection.style.display === '') {
        detailsSection.style.display = 'block';
        toggleText.textContent = 'Hide details';  // đổi "Hide details"
        toggleIcon.setAttribute('name', 'down-arrow');  // đổi the icon to a down arrow
    } else {
        detailsSection.style.display = 'none';
        toggleText.textContent = 'Show details';  // đổi to "Show details"
        toggleIcon.setAttribute('name', 'right-arrow');  // đổi the icon to a right arrow
    }
}


// JavaScript:

// Hàm toggleDetails sẽ kiểm tra trạng thái hiển thị của phần .show-details. Nếu phần này đang ẩn, nó sẽ được hiển thị và biểu tượng sẽ chuyển thành mũi tên xuống cùng với việc thay đổi văn bản thành "Hide details".
// Nếu phần chi tiết đã hiển thị, hàm sẽ ẩn nó và thay đổi lại biểu tượng về mũi tên phải cùng với văn bản "Show details".