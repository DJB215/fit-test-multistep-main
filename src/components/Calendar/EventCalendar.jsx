import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
} from "@mui/material";

import { IconButton } from "@chakra-ui/react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import moment from "moment";

import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  const [date, setDate] = useState(moment().toDate());

  const [eventInfoModal, setEventInfoModal] = useState(false);
  const [advance, setAdvance] = useState(0);
  const [beginning, setBeginning] = useState(true);
  const [ending, setEnding] = useState(false);

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

  const onPrevWeek = () => {
    setDate(moment(date).subtract(1, "w").toDate());
    setAdvance(advance - 1);
    if (advance == 0) {
      setBeginning(true);
      setEnding(false);
    } else if (advance == 1) {
      setBeginning(false);
      setEnding(false);
    } else if (advance == 2) {
      setBeginning(false);
      setEnding(true);
    }
  };

  const onNextWeek = () => {
    setDate(moment(date).add(1, "w").toDate());
    setAdvance(advance + 1);
    if (advance == 2) {
      setEnding(true);
      setBeginning(false);
    } else if (advance == 1) {
      setEnding(false);
      setBeginning(false);
    } else if (advance == 0) {
      setEnding(false);
      setBeginning(true);
    }
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

  const from = moment(date)?.startOf("week");
  const dateText = `${from.format("MMMM YYYY")}`;

  return (
    <>
      <div align="center" style={{ marginTop: "136px" }}>
        <span
          className="title"
          style={{
            fontSize: "50px",
            fontFamily: "museo-sans",
            color: "#152456",
          }}
        >
          Please select a location
        </span>

        <select
          id="location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{
            background: "#152456",
            fontFamily: "museo-sans",
            fontSize: "25px",
            marginTop: "35px",
            height: "75px",
            width: "330px",
            color: "white",
            textIndent: "31px",
          }}
        >
          <option value="Abington">Abington</option>
        </select>
      </div>
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
            <div className=".flex-container" style={{ marginTop: "25px" }}>
              <div
                className="flex-child"
                style={{
                  marginTop: "25px",
                  color: "#152456",
                  fontFamily: "museo-sans",
                  fontSize: "35px",
                  width: "100%",
                  height: "50px",
                  textAlign: "center",
                  verticalAlign: "center",
                }}
              >
                {dateText}
                <span style={{ float: "right", marginRight: "15px" }}>
                  {beginning ? (
                    <IconButton
                      aria-label="Previous"
                      icon={<ArrowLeft height="25px" width="25px" />}
                      onClick=""
                      style={{
                        marginRight: "21px",
                        background: "#CDC6C1",
                        color: "#FFFFFF",
                        width: "100px",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <IconButton
                      aria-label="Previous"
                      icon={<ArrowLeft height="25px" width="25px" />}
                      onClick={onPrevWeek}
                      style={{
                        marginRight: "21px",
                        background: "#152456",
                        color: "#fff",
                        width: "100px",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  )}

                  {ending ? (
                    <IconButton
                      aria-label="Next"
                      icon={<ArrowRight height="25px" width="25px" />}
                      onClick=""
                      style={{
                        background: "#CDC6C1",
                        color: "#FFFFFF",
                        width: "100px",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  ) : (
                    <IconButton
                      aria-label="Next"
                      icon={<ArrowRight height="25px" width="25px" />}
                      onClick={onNextWeek}
                      style={{
                        background: "#152456",
                        color: "#fff",
                        width: "100px",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </span>
              </div>
            </div>
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
                toolbar={false}
                date={date}
              />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default EventCalendar;
