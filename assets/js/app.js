document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    new Controller(model, view);
});