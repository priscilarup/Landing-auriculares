// Carrusel
let currentCarouselIndex = 0;
function changeSlide(n) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    currentCarouselIndex += n;
    if (currentCarouselIndex >= items.length) currentCarouselIndex = 0;
    if (currentCarouselIndex < 0) currentCarouselIndex = items.length - 1;
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    items[currentCarouselIndex].classList.add('active');
    dots[currentCarouselIndex].classList.add('active');
}
function currentSlide(n) {
    currentCarouselIndex = n;
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    items[currentCarouselIndex].classList.add('active');
    dots[currentCarouselIndex].classList.add('active');
}
// Auto-advance carousel
setInterval(() => changeSlide(1), 5000);
// Inicializar primer slide
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    if (items.length > 0) {
        items[0].classList.add('active');
        dots[0].classList.add('active');
    }
});

// Partículas de fondo estilo neón
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.7,
            dy: (Math.random() - 0.5) * 0.7,
            color: Math.random() > 0.5 ? '#C8102E' : '#D4AF37'
        });
    }
}
createParticles();

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// Temporizador de oferta especial
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    function updateTimer() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        if (--timer < 0) {
            display.textContent = "¡Tiempo agotado!";
        } else {
            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
}
// Seleccionamos el elemento
const guarantee = document.querySelector('.guarantee');

// Cuando el mouse entra
guarantee.addEventListener('mouseenter', () => {
    guarantee.style.transform = 'scale(1.05)';
    guarantee.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    guarantee.style.boxShadow = '0 8px 25px rgba(0,0,0,0.5)';
});

// Cuando el mouse sale
guarantee.addEventListener('mouseleave', () => {
    guarantee.style.transform = 'scale(1)';
    guarantee.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
});


window.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    startTimer(60 * 15, timerDisplay); // 15 minutos

    // Animación de scroll suave para CTA
    document.getElementById('cta-main').onclick = () => {
        document.querySelector('.buy-form').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('cta-offer').onclick = () => {
        document.querySelector('.buy-form').scrollIntoView({ behavior: 'smooth' });
    };

// Formulario de compra con flujo de secciones
function showPaymentSection() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email-form').value;
    const direccion = document.getElementById('direccion').value;
    const codigoPostal = document.getElementById('codigo-postal').value;
    const provincia = document.getElementById('provincia').value;
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;
    const telefono = document.getElementById('telefono').value;
    
    if (nombre && email && direccion && codigoPostal && provincia && ciudad && pais && telefono) {
        document.getElementById('contact-section').classList.remove('active');
        document.getElementById('contact-section').classList.add('hidden');
        document.getElementById('payment-section').classList.remove('hidden');
        document.getElementById('payment-section').classList.add('active');
    } else {
        alert('Por favor completa todos los campos de contacto y dirección');
    }
}

function backToContact() {
    document.getElementById('payment-section').classList.remove('active');
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById('contact-section').classList.remove('hidden');
    document.getElementById('contact-section').classList.add('active');
}

// Formulario de compra - envío
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.buy-form').onsubmit = function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email-form').value;
        const cardNumber = document.getElementById('card-number').value;
        
        if (nombre && email && cardNumber) {
            const lastFourDigits = cardNumber.slice(-4);
            alert('¡Gracias por tu compra ' + nombre + '!\n\nPago procesado exitosamente.\nTarjeta terminada en: ' + lastFourDigits + '\n\nTe enviaremos los detalles del envío a: ' + email);
            this.reset();
            showPaymentSection();
            backToContact();
        }
    };
});

    // Formulario de suscripción (solo frontend)
    document.querySelector('.subscribe-form').onsubmit = function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.');
            this.reset();
        }
    };
});