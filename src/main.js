document.addEventListener('DOMContentLoaded', function () {
    const heroButtons = document.querySelectorAll('.hero__botoes button');
    const tabButtons = document.querySelectorAll('[data-tab-button]');

    heroButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const tabButton = button.getAttribute('data-tab-button');
            const tab = document.querySelector(`[data-tab-id="${tabButton}"]`);
            escondeTodasAbas();

            if (tab) {
                tab.classList.add('opcoes__lista--is-active');
                removeBotaoAtivo(tabButtons);
                button.classList.add('opcoes__botoes__button--is-active');
            }
        });
    });
});

function removeBotaoAtivo(buttons) {
    buttons.forEach(function (button) {
        button.classList.remove('opcoes__botoes__button--is-active');
    });
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    tabsContainer.forEach(function (tab) {
        tab.classList.remove('opcoes__lista--is-active');
    });
}
