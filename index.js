document.addEventListener('DOMContentLoaded', () => {
    const updateTimeAndDay = () => {
        const now = new Date();
        const utcTime = now.toISOString().split('T')[1].split('.')[0];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = dayOfWeek;
    };

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000);
});
