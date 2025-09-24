import React, { useState } from "react";
import styles from "./RoomInput.module.scss";
import Image from "next/image";

interface RoomInputPropsInterface {
  onJoinRoom: (roomName: string) => void;
}

const RoomInput = ({ onJoinRoom } : RoomInputPropsInterface) => {
  const [roomName, setRoomName] = useState("");

  const handleJoinRoom = () => {
    onJoinRoom(roomName);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name="room"
        value={roomName}
        className={styles.input}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter room name"
      />
      <Image src={"/send.png"} alt="send" width={32} height={32} onClick={handleJoinRoom} />
    </div>
  );
};

export default RoomInput;
