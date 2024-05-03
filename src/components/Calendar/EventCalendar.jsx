import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
} from "@mui/material";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";

import EventInfo from "./EventInfo.jsx";
import AddEventModal from "./AddEventModal.jsx";
import EventInfoModal from "./EventInfoModal.jsx";
import { AddTodoModal } from "./AddTodoModal.jsx";
import AddDatePickerEventModal from "./AddDatePickerEventModal.jsx";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventCalendar = () => {
  const [openSlot, setOpenSlot] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const [eventInfoModal, setEventInfoModal] = useState(false);

  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);

  const [eventFormData, setEventFormData] = useState();

  const [datePickerEventFormData, setDatePickerEventFormData] = useState();

  const handleSelectSlot = (event) => {
    setOpenSlot(true);
    setCurrentEvent(event);
    setSelectedSlot(event);
    console.log(selectedSlot);
  };

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setEventInfoModal(true);
  };

  const handleClose = () => {
    setEventFormData();
    setOpenSlot(false);
  };

  const handleDatePickerClose = () => {
    setDatePickerEventFormData();
    setOpenDatepickerModal(false);
  };

  const onAddEvent = (e) => {
    e.preventDefault();

    const data = {
      ...eventFormData,
      start: currentEvent?.start,
      end: currentEvent?.end,
    };

    const newEvents = [...events, data];

    setEvents(newEvents);

    handleClose();
  };

  const onAddEventFromDatePicker = (e) => {
    e.preventDefault();

    const addHours = (date, hours) => {
      return date ? date.setHours(date.getHours() + hours) : undefined;
    };

    const setMinToZero = (date) => {
      date.setSeconds(0);

      return date;
    };

    const data = {
      ...datePickerEventFormData,
      start: setMinToZero(datePickerEventFormData.start),
      end: datePickerEventFormData.allDay
        ? addHours(datePickerEventFormData.start, 12)
        : setMinToZero(datePickerEventFormData.end),
    };

    const newEvents = [...events, data];

    setEvents(newEvents);
    setDatePickerEventFormData();
  };

  const onDeleteEvent = () => {
    setEvents(() => [...events].filter((e) => e._id !== currentEvent._id));
    setEventInfoModal(false);
  };

  return (
    <Box
      mt={2}
      mb={2}
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Card>
          <CardHeader style={{ display: "none" }} />

          <CardContent>
            <Divider style={{ margin: 10 }} />
            <AddEventModal
              open={openSlot}
              handleClose={handleClose}
              eventFormData={eventFormData}
              setEventFormData={setEventFormData}
              onAddEvent={onAddEvent}
              eventDetails={selectedSlot}
              todos={todos}
            />
            <AddDatePickerEventModal
              open={openDatepickerModal}
              handleClose={handleDatePickerClose}
              datePickerEventFormData={datePickerEventFormData}
              setDatePickerEventFormData={setDatePickerEventFormData}
              onAddEvent={onAddEventFromDatePicker}
              todos={todos}
            />
            <EventInfoModal
              open={eventInfoModal}
              handleClose={() => setEventInfoModal(false)}
              onDeleteEvent={onDeleteEvent}
              currentEvent={currentEvent}
            />
            <AddTodoModal
              open={openTodoModal}
              handleClose={() => setOpenTodoModal(false)}
              todos={todos}
              setTodos={setTodos}
            />
            <Calendar
              localizer={localizer}
              events={events}
              step={10}
              min={moment("7:00", "h:mm").toDate()}
              max={moment("19:00", "h:mm").toDate()}
              views={["week"]}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              startAccessor="start"
              components={{ event: EventInfo }}
              endAccessor="end"
              defaultView="week"
              style={{
                height: 900,
              }}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EventCalendar;
