'use client'

import { useState } from "react";
import UsernameInput from "./Components/UsernameInput/UsernameInput";
import Chatspace from "./chatspace/page";


export default function HomePage() {
  const [username, setUsername] = useState<string | null>(null);

  const handleSetUsername = (username: string) => {
    setUsername(username);
  };

  return (
    <div>
      {!username ? (
        <>
        <UsernameInput onSetUsername={handleSetUsername} />
        </>
      ) : (
        <Chatspace actualUsername={username} />
      )}
    </div>
  );
}
