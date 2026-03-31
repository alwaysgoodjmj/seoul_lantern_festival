document.addEventListener('DOMContentLoaded', () => {
    const dropDownItems = document.querySelectorAll('.js-dropdown');
    
    // gnb
    dropDownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            dropDownItems.forEach(el => el.classList.remove('ON'));
            item.classList.add('ON');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('ON');
        });
    });
});