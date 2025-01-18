import React from "react";

const EventLists = ({ events }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Your Events</h2>
      {events.length === 0 ? (
        <p>No events added yet. Start by adding some!</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {events.map((event, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                margin: "0.5rem auto",
                padding: "1rem",
                borderRadius: "8px",
                width: "80%",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventLists;
