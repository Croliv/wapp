function redirectToWhatsApp(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('phoneNumber').value.trim();
    const messageInput = document.getElementById('message').value.trim();

    if (!phoneInput) {
        alert('Por favor, insira um número de telefone.');
        return;
    }

    const encodedMessage = encodeURIComponent(messageInput);
    const whatsappLink = `https://wa.me/+55${phoneInput}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    document.getElementById('whatsappForm').reset();
}
