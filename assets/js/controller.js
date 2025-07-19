class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Inicializar vistas
        this.view.renderServices(this.model.getServices());
        this.view.renderProjects(this.model.getProjects());

        // Configurar eventos
        this.view.bindContactForm(this.handleContactForm.bind(this));
        this.view.initSmoothScrolling();
        this.view.initNavbarScroll();
    }

    async handleContactForm(formData) {
        return await this.model.submitContactForm(formData);
    }
}