document.addEventListener('DOMContentLoaded', () => {
    // header
    const header = document.querySelector('#header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          header.classList.add('chgBack');
        } else {
          header.classList.remove('chgBack');
        }
    });
    
    // gnb
    const dropDownItems = document.querySelectorAll('.js-dropdown');

    dropDownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            dropDownItems.forEach(el => el.classList.remove('on'));
            item.classList.add('on');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('on');
        });
    });

    //tab
    const tabBtns = document.querySelectorAll('.btn-tab');

    tabBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const container = this.closest('[data-tab-container]');
            const targetId = this.dataset.tab;

            container.querySelectorAll('.btn-tab').forEach(btn => btn.classList.remove('Active'));
            this.classList.add('Active');

            container.querySelectorAll('.tab-content').forEach(content => {
                content.classList.toggle('on', content.dataset.tab === targetId);
            });
        });
    });

    // info-container
    const cardLists = document.querySelectorAll('.info-card > ul'); 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1
    });
    
    cardLists.forEach(ul => observer.observe(ul));

    // btn-move-insta
    const btnInsta = document.querySelector('.btn-move-insta');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            btnInsta.classList.add('show');
        } else {
            btnInsta.classList.remove('show');
        }
    });
});