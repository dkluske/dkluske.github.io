document.addEventListener('input', updateSendMailButton);

function toggleMobileMenu() {
    document.getElementById('mobile-nav-bar').classList.toggle('hidden');
}

function updateSendMailButton() {
    let topic = document.getElementById('contact-topic');
    let message = document.getElementById('contact-description');

    let sendMailButton = document.getElementById('send-email-link');

    sendMailButton.href = 'mailto:dominik.kluske@proton.me?subject=' + topic.value + '&body=' + message.value
}