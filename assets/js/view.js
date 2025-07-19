class View {
    constructor() {
        this.servicesContainer = document.getElementById('services-container');
        this.projectsContainer = document.getElementById('projects-container');
        this.contactForm = document.getElementById('contact-form');
    }

    renderServices(services) {
        this.servicesContainer.innerHTML = services.map(service => `
            <div class="col-md-6 col-lg-4">
                <div class="service-card p-4 h-100">
                    <div class="service-icon">
                        <i class="fas ${service.icon}"></i>
                    </div>
                    <h3 class="h4">${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderProjects(projects) {
        this.projectsContainer.innerHTML = projects.map(project => `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <img src="assets/img/projects/${project.image}" alt="${project.title}" class="img-fluid w-100">
                    <div class="project-overlay p-3 text-center">
                        <h3 class="h4">${project.title}</h3>
                        <span class="badge bg-light text-primary">${project.category}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
    

    bindContactForm(handler) {
        this.contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = {
                name: this.contactForm.querySelector('#name').value,
                email: this.contactForm.querySelector('#email').value,
                phone: this.contactForm.querySelector('#phone').value,
                message: this.contactForm.querySelector('#message').value
            };

            const submitBtn = this.contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
            
            try {
                const result = await handler(formData);
                this.showAlert(result.message, result.success ? 'success' : 'danger');
                if (result.success) {
                    this.contactForm.reset();
                }
            } catch (error) {
                this.showAlert('Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.', 'danger');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        const existingAlert = this.contactForm.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        this.contactForm.appendChild(alertDiv);
        
        setTimeout(() => {
            alertDiv.classList.add('fade');
            setTimeout(() => alertDiv.remove(), 150);
        }, 5000);
    }

    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Cerrar el menú móvil si está abierto
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            });
        });
    }

    initNavbarScroll() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
