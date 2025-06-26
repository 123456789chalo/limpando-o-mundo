document.addEventListener('DOMContentLoaded', function() {
   
    const themeToggle = document.querySelector('#theme-toggle');
    const learnMoreBtn = document.querySelector('#learn-more');
    const mainImage = document.querySelector('#main-image');
    const contactForm = document.querySelector('#team-contact-form');
    

    function loadTeamMembers() {
        const teamContainer = document.querySelector('#team-container');
        if (!teamContainer) return;

        
        const teamMembers = [
            { name: "João Pedro Dos Santos", year: "2001", email: "joaopedro.santos22@nave.org.br" },
            { name: "Danilo Augusto", year: "2001", email: "danilo.augusto23@nave.org.br" },
            { name: "Erick Nogueira", year: "2001", email: "erick.nogueira23@nave.org.br" },
            { name: "João Gabriel", year: "2003", email: "joaogabriel.fortes23@nave.org.br" }
        ];

        teamContainer.innerHTML = ''; 

        teamMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'team-card';
            memberCard.innerHTML = `
                <div class="member-avatar">${member.name.charAt(0)}</div>
                <h3>${member.name}</h3>
                <p>${member.year}</p>
                <p>${member.email}</p>
            `;
            teamContainer.appendChild(memberCard);
        });
    }

    function handleMainImage() {
        if (!mainImage) return;
        
        
        const images = ['imagens/limpando o mundo.png']; 
        if (images.length > 1) {
            let currentIndex = 0;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                mainImage.src = images[currentIndex];
            }, 5000);
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
            localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
        });

    
        if (localStorage.getItem('darkTheme') === 'true') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️';
        }
    }


    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const odsDetails = document.querySelector('#ods-details');
            if (odsDetails) {
                odsDetails.classList.toggle('hidden');
                this.textContent = odsDetails.classList.contains('hidden') ? 'Saiba mais' : 'Mostrar menos';
            }
        });
    }

 
    loadTeamMembers();
    handleMainImage();
});
