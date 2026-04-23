// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // when to trigger

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// Form Submission (Prevent default for demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('감사합니다. 문의가 성공적으로 접수되었습니다. 마스터가 확인 후 곧 연락드리겠습니다.');
    this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Language Toggle
const langBtnKo = document.getElementById('lang-ko');
const langBtnEn = document.getElementById('lang-en');
const translatableElements = document.querySelectorAll('[data-ko]');

function setLanguage(lang) {
    if (lang === 'ko') {
        langBtnKo.classList.add('active');
        langBtnEn.classList.remove('active');
    } else {
        langBtnEn.classList.add('active');
        langBtnKo.classList.remove('active');
    }

    translatableElements.forEach(el => {
        if (lang === 'ko' && el.dataset.ko) {
            el.innerHTML = el.dataset.ko;
        } else if (lang === 'en' && el.dataset.en) {
            el.innerHTML = el.dataset.en;
        }
    });
    
    // Update placeholders
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact-info');
    const messageInput = document.getElementById('message');
    
    if(nameInput) nameInput.placeholder = lang === 'ko' ? "성함을 입력해주세요" : "Please enter your name";
    if(contactInput) contactInput.placeholder = lang === 'ko' ? "연락 받으실 번호나 이메일을 입력해주세요" : "Please enter your phone or email";
    if(messageInput) messageInput.placeholder = lang === 'ko' ? "문의하실 내용을 자유롭게 적어주세요." : "Please freely write your inquiry.";
}

langBtnKo.addEventListener('click', () => setLanguage('ko'));
langBtnEn.addEventListener('click', () => setLanguage('en'));
