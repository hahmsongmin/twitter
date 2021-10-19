import React, { useRef, useState } from "react";

const Home = () => {
  const inputRef = useRef();
  const [twitter, setTwitter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTwitter(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="내용을 입력하세요"
          maxLength={120}
        />
        <input type="submit" value="Twitter" />
      </form>
    </main>
  );
};
export default Home;
