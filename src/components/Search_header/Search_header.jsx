import React, { useRef } from "react";
import styles from "./Search_header.module.css";
const Search_header = ({ onSearch, home }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  console.log("test");
  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          home();
        }}
      >
        <img className={styles.img} src="./logo.png" alt="logo" />
        <h1 className={styles.title}>YOUTUBE</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit">
        <img
          className={styles.buttonImg}
          src="./search.png"
          alt="search"
          onClick={onClick}
        />
      </button>
    </header>
  );
};

export default Search_header;
