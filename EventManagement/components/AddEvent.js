import React, { useState } from "react";
import "./styles.css";

const AddEvent = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventName.trim() === "" || eventDescription.trim() === "") {
      alert("Please provide both event name and description.");
      return;
    }

    onAddEvent({ name: eventName, description: eventDescription });

    setEventName("");
    setEventDescription("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Add a New Event</h2>
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          style={{
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "8px",
          }}
        />
        <br />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          style={{
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "8px",
            minHeight: "100px",
          }}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
