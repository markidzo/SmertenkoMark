document.getElementById('aboutMeLink').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо стандартному переходу по якорю
    const target = document.getElementById(this.getAttribute('href').substring(1));
    
    // Плавний скрол до елемента з id "abv"
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('projectLink').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо стандартному переходу по якорю
    const target = document.getElementById(this.getAttribute('href').substring(1));
    
    // Плавний скрол до елемента з id "abv"
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});


document.getElementById('skillLink').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо стандартному переходу по якорю
    const target = document.getElementById(this.getAttribute('href').substring(1));
    
    // Плавний скрол до елемента з id "abv"
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById('contLink').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігаємо стандартному переходу по якорю
    const target = document.getElementById(this.getAttribute('href').substring(1));
    
    // Плавний скрол до елемента з id "abv"
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});