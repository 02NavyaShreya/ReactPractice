import "./styles.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import EventLists from "./components/EventLists";
import AddEvent from "./components/AddEvent";
import EventDetails from "./components/EventDetails";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "eventList":
        return <EventLists events={events} />;
      case "addEvent":
        return <AddEvent onAddEvent={handleAddEvent} />;
      case "eventDetails":
        return <EventDetails />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
