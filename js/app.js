document.addEventListener('DOMContentLoaded', function() {
    const nameModal = document.getElementById('greetingModal');
    const nameInput = document.getElementById('userNameInput');
    const nameSubmitBtn = document.getElementById('greetingSubmitBtn');
    
    const ageModal = document.getElementById('ageModal');
    const ageInput = document.getElementById('userAgeInput');
    const ageSubmitBtn = document.getElementById('ageSubmitBtn');
    
    const promoTitle = document.getElementById('promoTitle');
    const promoWrapper = document.getElementById('promoWrapper');
    
    if (!nameModal || !nameInput || !nameSubmitBtn || !ageModal || !ageInput || !ageSubmitBtn) {
        console.error('Не найдены элементы модальных окон. Проверьте ID в HTML.');
        return;
    }

    let userName = '';

    nameModal.classList.remove('hidden');
    setTimeout(function() { nameInput.focus(); }, 300);

    function submitName() {
        const name = nameInput.value.trim();
        if (name) {
            userName = name;
            nameModal.classList.add('hidden');
            
            ageModal.classList.remove('hidden');
            setTimeout(function() { ageInput.focus(); }, 100);
        } else {
            nameInput.classList.add('error');
            nameInput.placeholder = 'Пожалуйста, введите имя';
            nameInput.focus();
        }
    }

    function submitAge() {
        const age = parseInt(ageInput.value.trim(), 10);
        
        if (!isNaN(age) && age > 0 && age < 120) {
            
            if (promoWrapper) {
                promoWrapper.classList.remove('aquapark', 'club');
                
                if (age <= 15) {
                    promoWrapper.classList.add('aquapark');
                } else if (age >= 16 && age <= 35) {
                    promoWrapper.classList.add('club');
                }
            }

            if (promoTitle) {
                promoTitle.innerText = 'Привет, ' + userName + '! Добро пожаловать на сайт группы отелей Selly Hotels!';
            }
            
            ageModal.classList.add('hidden');
        } else {
            ageInput.classList.add('error');
            ageInput.placeholder = 'Введите корректный возраст';
            ageInput.focus();
        }
    }

    nameSubmitBtn.addEventListener('click', submitName);
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitName();
        }
    });
    nameInput.addEventListener('input', function() {
        nameInput.classList.remove('error');
        nameInput.placeholder = 'Ваше имя';
    });

    ageSubmitBtn.addEventListener('click', submitAge);
    ageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitAge();
        }
    });
    ageInput.addEventListener('input', function() {
        ageInput.classList.remove('error');
        ageInput.placeholder = 'Ваш возраст';
    });
});