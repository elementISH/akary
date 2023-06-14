import React, { useEffect, useState } from "react";
import NewRoom from "./NewRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function NewRooms(props) {
  const rooms = props.rooms;
  const setRooms = props.setter;

  const addRoom = (e) => {
    e.preventDefault();
    setRooms([
      ...rooms,
      {
        id: Math.random(),
        init: "room",
        type: "",
        width: 0,
        height: 0,
        length: 0,
      },
    ]);
  };

  const removeRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const handleRoomChange = (roomIndex, field, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex][field] = value;
    setRooms(updatedRooms);
  };

  return (
    <>
      <div className="new-rooms">
        {rooms.map((room, index) => (
          <NewRoom
            key={room.id}
            room={room}
            roomIndex={index}
            handleRoomChange={handleRoomChange}
            removeRoom={() => removeRoom(room.id)}
          />
        ))}
      </div>
      <div className="mb-3 w-100 px-1">
        <button
          className="w-100 d-flex gap-3 justify-content-center align-items-center py-1"
          onClick={addRoom}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add a room
        </button>
      </div>
    </>
  );
}
