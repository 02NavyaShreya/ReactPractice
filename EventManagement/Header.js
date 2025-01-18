import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const Header = ({ setCurrentPage }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <button
        onClick={() => setCurrentPage("home")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <AiOutlineHome /> Home
      </button>
      <button
        onClick={() => setCurrentPage("eventList")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <AiOutlineUnorderedList /> Event List
      </button>
      <button
        onClick={() => setCurrentPage("addEvent")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <AiOutlinePlusCircle /> Add Event
      </button>
    </nav>
  );
};

export default Header;
