function updateTime() {
    const now = new Date();
  
    const options = { timeZone: 'America/Sao_Paulo' };
    const hours = now.toLocaleTimeString('pt-BR', { ...options, hour: '2-digit', hour12: false });
    const minutes = now.toLocaleTimeString('pt-BR', { ...options, minute: '2-digit' });
    const seconds = now.toLocaleTimeString('pt-BR', { ...options, second: '2-digit' });

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTime, 1000);

updateTime();
