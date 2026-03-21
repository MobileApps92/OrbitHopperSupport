(function() {
    // ===== STAR FIELD =====
    function createStars(container, count, colorChance) {
        var frag = document.createDocumentFragment();
        var colors = ['colored-orange', 'colored-cyan', 'colored-purple'];
        for (var i = 0; i < count; i++) {
            var star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = (Math.random() * 6) + 's';
            if (Math.random() < colorChance) {
                star.classList.add(colors[Math.floor(Math.random() * colors.length)]);
            }
            frag.appendChild(star);
        }
        container.appendChild(frag);
    }
    createStars(document.getElementById('stars-far'), 120, 0.05);
    createStars(document.getElementById('stars-mid'), 60, 0.08);
    createStars(document.getElementById('stars-near'), 25, 0.12);

    // ===== PARALLAX =====
    if (window.matchMedia('(pointer: fine)').matches) {
        var farLayer = document.getElementById('stars-far');
        var midLayer = document.getElementById('stars-mid');
        var nearLayer = document.getElementById('stars-near');
        document.addEventListener('mousemove', function(e) {
            var mx = (e.clientX / window.innerWidth - 0.5) * 2;
            var my = (e.clientY / window.innerHeight - 0.5) * 2;
            farLayer.style.transform = 'translate(' + (mx * -5) + 'px, ' + (my * -5) + 'px)';
            midLayer.style.transform = 'translate(' + (mx * -12) + 'px, ' + (my * -12) + 'px)';
            nearLayer.style.transform = 'translate(' + (mx * -22) + 'px, ' + (my * -22) + 'px)';
        });
    }

    // ===== CAROUSEL =====
    var track = document.getElementById('carousel-track');
    var isDragging = false;
    var dragDistance = 0;
    var DRAG_THRESHOLD = 5;

    if (track) {
        // Duplicate items for seamless loop
        var items = track.innerHTML;
        track.innerHTML = items + items;

        var DURATION = 40; // seconds, must match CSS
        var startX = 0;
        var scrollOffset = 0;
        var resumeTimer = null;

        function getTranslateX() {
            var matrix = new DOMMatrix(window.getComputedStyle(track).transform);
            return matrix.m41;
        }

        // Freeze animation at its current computed position
        function freezeAtCurrent() {
            var currentX = getTranslateX();
            track.style.animation = 'none';
            track.style.transform = 'translateX(' + currentX + 'px)';
        }

        // Resume animation from whatever translateX is currently set
        function resumeFromCurrent() {
            var currentX = getTranslateX();
            var halfWidth = track.scrollWidth / 2;

            // Normalize into 0...-halfWidth
            while (currentX > 0) currentX -= halfWidth;
            while (currentX < -halfWidth) currentX += halfWidth;

            var progress = Math.abs(currentX / halfWidth);
            var delay = -(progress * DURATION);

            // Re-enable animation from this exact point
            track.style.transform = '';
            track.style.animation = 'carousel-scroll ' + DURATION + 's linear infinite';
            track.style.animationDelay = delay + 's';
        }

        // --- Hover pause (JS-controlled, no snap) ---
        var section = track.closest('.carousel-section');
        section.addEventListener('mouseenter', function() {
            if (isDragging) return;
            if (resumeTimer) clearTimeout(resumeTimer);
            freezeAtCurrent();
        });
        section.addEventListener('mouseleave', function() {
            if (isDragging) return;
            resumeFromCurrent();
        });

        // --- Drag / swipe ---
        function startDrag(clientX) {
            isDragging = true;
            dragDistance = 0;
            startX = clientX;
            if (resumeTimer) clearTimeout(resumeTimer);
            scrollOffset = getTranslateX();
            track.classList.add('dragging');
            track.style.animation = 'none';
            track.style.transform = 'translateX(' + scrollOffset + 'px)';
        }

        function moveDrag(clientX) {
            if (!isDragging) return;
            var dx = clientX - startX;
            dragDistance = Math.abs(dx);
            var newX = scrollOffset + dx;

            var halfWidth = track.scrollWidth / 2;
            if (newX > 0) newX -= halfWidth;
            if (newX < -halfWidth) newX += halfWidth;

            track.style.transform = 'translateX(' + newX + 'px)';
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            track.classList.remove('dragging');

            // Brief hold, then resume auto-scroll from current position
            resumeTimer = setTimeout(function() {
                resumeFromCurrent();
            }, 1500);
        }

        // Mouse events
        track.addEventListener('mousedown', function(e) {
            e.preventDefault();
            startDrag(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
            moveDrag(e.clientX);
        });
        document.addEventListener('mouseup', function() {
            endDrag();
        });

        // Touch events
        track.addEventListener('touchstart', function(e) {
            startDrag(e.touches[0].clientX);
        }, { passive: true });
        document.addEventListener('touchmove', function(e) {
            if (isDragging) moveDrag(e.touches[0].clientX);
        }, { passive: true });
        document.addEventListener('touchend', function() {
            endDrag();
        });
    }

    // ===== LIGHTBOX =====
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        document.addEventListener('click', function(e) {
            // Don't open lightbox if user was dragging
            if (dragDistance > DRAG_THRESHOLD) return;

            var frame = e.target.closest('.carousel-frame');
            if (frame) {
                var img = frame.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.add('active');
                }
            }
        });
        lightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') lightbox.classList.remove('active');
        });
    }
})();
