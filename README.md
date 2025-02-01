# Calendar Application

This is a simple calendar application that allows users to view a monthly calendar, navigate between months, and add events to specific dates.

## Features

- Display the current month and year.
- Navigate to the previous and next months.
- Highlight the current date.
- Add events to specific dates, including title, description, and time.
- Modal popup for adding events.

## Usage

### Viewing the Calendar

The calendar displays the current month and year by default. Days of the week are displayed as headers, and each day of the month is shown in the calendar grid.

### Navigating Between Months

Use the "Previous Month" and "Next Month" buttons to navigate between months. The calendar will update to show the selected month and year.

### Adding Events

1. Click on a specific date in the calendar.
2. A modal will appear allowing you to add an event title, description, and time.
3. Fill in the event details and submit the form.
4. The event will be saved and associated with the selected date.

## Code Overview

The main JavaScript code for the calendar application is located in `cal.js`. Below is an overview of the key functions and elements:

- `renderCalendar(date)`: Renders the calendar for the given date.
- `openEventModal(year, month, day)`: Opens the modal for adding an event.
- `closeEventModal()`: Closes the event modal.
- Event listeners for navigating between months and handling modal events.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/BOJJASANJANA/calender.git
2. Navigate to the project folder:
    cd calender
How it works
The calendar is generated dynamically based on the current date and allows navigation through months.
Users can click on a day to open a modal where they can add an event (title, description, and time).
Events are stored in memory and shown on the respective dates.
## Technologies Used
HTML5
CSS3
JavaScript
## File Structure
calender/
│
├── index.html          # The main HTML file
├── cal.css             # The styles for the calendar
├── cal.js              # The JavaScript for calendar functionality
└── README.md           # The README file you're reading now
## License
This project is open-source and available under the MIT License.
