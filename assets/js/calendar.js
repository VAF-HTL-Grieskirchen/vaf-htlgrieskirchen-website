import ICAL from "ical.js";
import { Calendar } from "@fullcalendar/core";
import deLocale from "@fullcalendar/core/locales/de";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

const icsUrl =
  "https://api.vereinsplaner.at/v1/public/ical/a33b6be2-f689-4955-a71b-c541d7654a55.ics";

document.addEventListener("DOMContentLoaded", function () {
  fetch(icsUrl)
    .then((response) => response.text())
    .then((data) => {
      const jcalData = ICAL.parse(data);
      const comp = new ICAL.Component(jcalData);
      const events = comp.getAllSubcomponents("vevent");

      let calendarEvents = events.map((event) => {
        let vevent = new ICAL.Event(event);
        return {
          title: vevent.summary,
          start: vevent.startDate.toString(),
          end: vevent.endDate ? vevent.endDate.toString() : null,
        };
      });

      const calendarElement = document.getElementById("calendar");
      const calendar = new Calendar(calendarElement, {
        plugins: [dayGridPlugin, listPlugin],
        initialView: "listMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "listMonth,dayGridMonth",
        },
        events: calendarEvents,
        locale: deLocale,
      });
      calendar.render();
    })
    .catch((error) => console.error("Error loading calendar:", error));
});
