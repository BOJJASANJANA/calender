document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendar = document.getElementById('calendar');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const eventModal = document.getElementById('event-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const eventForm = document.getElementById('event-form');
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');
    const eventTime = document.getElementById('event-time');

    let currentDate = new Date();
    let selectedDate = null;
    const events = {};

    function renderCalendar(date) {
        calendar.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Create day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.textContent = day;
            header.className = 'day';
            header.style.fontWeight = 'bold';
            calendar.appendChild(header);
        });

        // Fill in the days
        for (let i = 0; i < firstDay; i++) {
            calendar.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= lastDay; day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.className = 'day';

            // Highlight current date
            if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
                dayElement.classList.add('current');
            }

            // Add event listener for selecting date
            dayElement.addEventListener('click', () => {
                if (selectedDate) {
                    selectedDate.classList.remove('selected');
                }
                selectedDate = dayElement;
                selectedDate.classList.add('selected');
                openEventModal(year, month, day);
            });

            calendar.appendChild(dayElement);
        }
    }

    function openEventModal(year, month, day) {
        eventModal.style.display = 'flex';
        eventForm.onsubmit = function (e) {
            e.preventDefault();
            const dateKey = `${year}-${month + 1}-${day}`;
            if (!events[dateKey]) {
                events[dateKey] = [];
            }
            events[dateKey].push({
                title: eventTitle.value,
                description: eventDescription.value,
                time: eventTime.value
            });
            eventTitle.value = '';
            eventDescription.value = '';
            eventTime.value = '';
            eventModal.style.display = 'none';
            renderCalendar(currentDate);
        };
    }

    function closeEventModal() {
        eventModal.style.display = 'none';
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    closeModalBtn.addEventListener('click', closeEventModal);

    renderCalendar(currentDate);
});