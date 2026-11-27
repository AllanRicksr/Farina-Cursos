// O botão no cabeçalho navega até a matrícula pelo link do HTML.
// O botão da seção de matrícula revela o aviso provisório.
const enrollmentButton = document.querySelector('[data-enrollment]');
const enrollmentNotice = document.getElementById('matricula-aviso');

function showEnrollmentNotice() {
  enrollmentNotice.classList.remove('hidden');
}

enrollmentButton.addEventListener('click', showEnrollmentNotice);
