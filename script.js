document.addEventListener('DOMContentLoaded', () => {
    
    const simulateBtn = document.getElementById('simulate-btn');
    const resultText = document.getElementById('simulation-result');

    if(simulateBtn) {
        simulateBtn.addEventListener('click', () => {
            // 1. Feedback visual de carregamento
            simulateBtn.textContent = "Enviando pedido para o servidor...";
            simulateBtn.style.opacity = "0.7";
            
            // 2. Simula o atraso da rede (Server latency)
            setTimeout(() => {
                // 3. Resposta do servidor
                simulateBtn.textContent = "Pedido Confirmado!";
                simulateBtn.style.backgroundColor = "#27ae60"; // Verde
                simulateBtn.style.borderColor = "#27ae60";
                simulateBtn.style.color = "white";
                
                // Mostra mensagem de sucesso
                resultText.textContent = "✓ Dados salvos no banco e restaurante notificado.";
                resultText.style.opacity = "1";
                
            }, 2000); // Espera 2 segundos
        });
    }

    // Rolagem suave para links internos (Opcional, mas boa prática)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});