class Model {
    constructor() {
        this.services = [
            {
                id: 1,
                title: "Soldadura MIG/MAG",
                description: "Soldadura por arco metálico con gas protector, ideal para aceros al carbono, inoxidables y aluminio.",
                icon: "fa-bolt"
            },
            {
                id: 2,
                title: "Soldadura TIG",
                description: "Soldadura de alta precisión con electrodo de tungsteno, perfecta para aceros inoxidables y aleaciones.",
                icon: "fa-fire"
            },
            {
                id: 3,
                title: "Soldadura por Arco",
                description: "Técnica tradicional versátil para diversos metales en diferentes condiciones.",
                icon: "fa-plug"
            },
            {
                id: 4,
                title: "Soldadura de Estructuras",
                description: "Fabricación y reparación de estructuras metálicas para construcción y maquinaria.",
                icon: "fa-building"
            },
            {
                id: 5,
                title: "Soldadura de Tuberías",
                description: "Especializados en sistemas de tuberías para sectores industriales y residenciales.",
                icon: "fa-pipe"
            },
            {
                id: 6,
                title: "Reparaciones Industriales",
                description: "Soluciones rápidas y efectivas para fallas en equipos y maquinaria industrial.",
                icon: "fa-tools"
            }
        ];

        this.projects = [
            {
                id: 1,
                title: "Estructura para Nave Industrial",
                image: "Mecanica.png",
                category: "Industrial"
            },
            {
                id: 2,
                title: "Barandales Residenciales",
                image: "Electrica.png",
                category: "Residencial"
            },
            {
                id: 3,
                title: "Sistema de Tuberías",
                image: "Manufactura.png",
                category: "Industrial"
            },
            {
                id: 4,
                title: "Escalera Metálica",
                image: "grua.png",
                category: "Comercial"
            },
            {
                id: 5,
                title: "Estructura para Techo",
                image: "Mecanica.png",
                category: "Residencial"
            },
            {
                id: 6,
                title: "Puerta de Seguridad",
                image: "Renta.png",
                category: "Comercial"
            }
        ];
    }

    getServices() {
        return this.services;
    }

    getProjects() {
        return this.projects;
    }

    submitContactForm(data) {
        // Aquí normalmente harías una llamada AJAX para enviar los datos
        console.log("Datos del formulario:", data);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Gracias por tu mensaje. Nos pondremos en contacto pronto." });
            }, 1000);
        });
    }
}