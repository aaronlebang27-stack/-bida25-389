
function filterSelection(category) {
    var items = document.getElementsByClassName("gallery-item");
    
    if (category === "all") {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = "block";
            } else {
                items[i].style.display = "none";
            }
        }
    }
    
    var buttons = document.getElementsByClassName("filter-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}
window.onload = function() {
    var gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        filterSelection('all');
        var firstButton = document.querySelector('.filter-buttons button');
        if (firstButton) {
            firstButton.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var img = this.querySelector('img');
            if (!img) return;
            
            var src = img.src;
            var alt = img.alt;
        
            var lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${src}" alt="${alt}">
                    <p>${alt}</p>
                </div>
            `;
            document.body.appendChild(lightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target.className === 'close-lightbox') {
                    lightbox.remove();
                }
            });
        });
    });
});

document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});