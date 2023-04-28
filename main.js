const prevBtn = document.querySelector('.prev')
const title = document.querySelector('.title')
const nextBtn = document.querySelector('.next')

document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: false,
        titleFormat: { 
            year: 'numeric', 
            month: 'long'
        },
        
        height: 'auto',

        selectable: true,
        eventBackgroundColor: '#6200EE',
        events: [
            {
              title  : 'event1',
              start  : '2010-01-01'
            },
            {
              title  : 'event2',
              start  : '2023-04-05',
              end    : '2023-04-09'
            },
            {
              title  : 'event3',
              start  : '2010-01-09T12:30:00',
              allDay : false // will make the time show
            }
          ]
    })

    calendar.render()
    calendar.setOption('locale', 'pt-br')

    title.innerHTML = calendar.currentData.viewTitle

    prevMonth(calendar)
    nextMonth(calendar)

    formatDaysOfWeek()
})

function nextMonth(calendar) {
    nextBtn.addEventListener('click', () => {
        calendar.next()
        title.innerHTML = calendar.currentData.viewTitle
    })
}

function prevMonth(calendar) {
    prevBtn.addEventListener('click', () => {
        calendar.prev()
        title.innerHTML = calendar.currentData.viewTitle
    })
}

function formatDaysOfWeek() {
    const days = document.querySelectorAll('.fc .fc-col-header-cell-cushion')
    days.forEach(day => {
        day.textContent = day.textContent.replace(/\./g, '')
        day.textContent = day.textContent.charAt(0).toUpperCase() + day.textContent.slice(1)
    })
}

