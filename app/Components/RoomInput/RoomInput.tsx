import React, { useState } from 'react';
import styles from './RoomInput.module.scss';

interface RoomInputProps {
  onJoinRoom: (roomName: string) => void;
}

const RoomInput: React.FC<RoomInputProps> = ({ onJoinRoom }) => {
  const [roomName, setRoomName] = useState('');

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
      <button className={styles.button} onClick={handleJoinRoom}>
        Join Room
      </button>
    </div>
  );
};

export default RoomInput;
