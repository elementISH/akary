import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NewRoom(props) {
  const [room, setRoom] = useState(props.room);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: name === "type" ? value : parseFloat(value),
    }));
    props.handleRoomChange(
      props.roomIndex,
      name,
      name === "type" ? value : parseFloat(value)
    );
  };

  return (
    <div className="w-100 d-flex new-room-cont position-relative">
      <FontAwesomeIcon
        icon={faTrash}
        onClick={props.removeRoom}
        className="room-delete-icon main-color mx-2"
      />
      <div className="mb-auto px-3">
        <label htmlFor="room-type-input" className="form-label">
          Type
        </label>
        <select
          id="room-type-input"
          className="form-select"
          name="type"
          value={room.type}
          onChange={handleInputChange}
        >
          <option value="bedroom">Bedroom</option>
          <option value="bathroom">Bathroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="corridor">Corridor</option>
          <option value="balcony">Balcony</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="room-height-input" className="form-label">
          height
        </label>
        <input
          type="text"
          name="height"
          className="form-control"
          id="room-height-input"
          placeholder="Height"
          value={room.height}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3 px-3">
        <label htmlFor="room-length-input" className="form-label">
          Length
        </label>
        <input
          type="text"
          name="length"
          className="form-control"
          id="room-length-input"
          placeholder="Length"
          value={room.length}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="room-width-input" className="form-label">
          Width
        </label>
        <input
          type="text"
          name="width"
          className="form-control"
          id="room-width-input"
          placeholder="Width"
          value={room.width}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
