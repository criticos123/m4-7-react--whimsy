import React from "react";
import styled from "styled-components";
import avatar from "./../../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("lll");
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        date,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
