document.addEventListener("DOMContentLoaded", async function () {
    const calendarEl = document.getElementById("calendarArea");
    const eventPopup = document.getElementById("eventPopup");
    const eventTitle = document.getElementById("eventTitle");
    const eventTime = document.getElementById("eventTime");
    const eventDescription = document.getElementById("eventDescription");
    const closePopup = document.getElementById("closePopup");
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      buttonText: {
        today: 'Today',
      },
      events: await getCalData(),
      eventClick: function (info) {
        info.jsEvent.preventDefault();
        eventTitle.textContent = info.event.title;
        eventTime.textContent = `Time: ${info.event.start.toLocaleString()} - ${info.event.end.toLocaleString()}`;
        eventDescription.textContent = info.event.extendedProps.description;
        eventPopup.style.display = "block";

        eventPopup.style.top = `${info.jsEvent.pageY + 10}px`;
        eventPopup.style.left = `${info.jsEvent.pageX + 10}px`;
      }
    });
    closePopup.addEventListener("click", function () {
      eventPopup.style.display = "none";
    });
    calendar.render();
  });
  async function getCalData(){
    try{
        const res = await fetch("https://deca-backend.onrender.com/api/calendar")
        const data = await res.json();
        console.log("data: " + data)
        document.getElementById("calendar-loader").style.display="none"
        document.getElementById("calendar-container").style.minHeight="0px"
        return data;
    }catch(e){
        console.log("Error fetching: " + e);
    }
}