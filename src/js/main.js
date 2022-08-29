window.addEventListener('DOMContentLoaded', () => {
    function stepForm() {
        const steps = document.querySelectorAll('.form__step'),
              prevBtn = document.querySelector('.prev__step'),
              nextBtn = document.querySelector('.next__step'),
              form = document.querySelector('.steps__form'),
              stepNumbers = document.querySelectorAll('.steps__number'),
              finishBlock = document.querySelector('.finish');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        let formStep = 0;

        prevBtn.addEventListener('click', () => {
            formStep--;
            stepNumbers[formStep + 1].classList.remove('active__number');
            updateFormSteps();
        });

        nextBtn.addEventListener('click', () => {
            if (formStep < steps.length - 1) {
                formStep++;
                updateFormSteps();
            }
        });

        function updateFormSteps() {
            steps.forEach(step => {
                if (step.classList.contains('active')) {
                    step.classList.remove('active');
                }
            });

            steps[formStep].classList.add('active');
            stepNumbers[formStep].classList.add('active__number');

            if (formStep == 0) {
                prevBtn.classList.add('hide');
                prevBtn.classList.remove('show');
            } else {
                prevBtn.classList.add('show');
                prevBtn.classList.remove('hide');
            }

            if (formStep == steps.length - 1) {
                nextBtn.textContent = 'Finish';
                nextBtn.addEventListener('click', () => {
                    finishBlock.classList.add('show');
                    form.classList.add('hide');
                    prevBtn.classList.add('hide');
                    nextBtn.classList.add('hide');
                });
            } else {
                nextBtn.textContent = 'Next';
            }
        }

        updateFormSteps();
    }
    stepForm();
});