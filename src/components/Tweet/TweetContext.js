import React, { useState } from "react";
import styled from "styled-components";
import avatar from "./../../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("lll");
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [reTweets, setReTweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isReTweeted, setIsReTweeted] = useState(false);

  const handleToggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
    } else {
      setIsLiked(false);
      setNumOfLikes(numOfLikes - 1);
    }
  };
  const handleReTweet = () => {
    if (!isReTweeted) {
      setIsReTweeted(true);
      setReTweets(reTweets + 1);
    } else {
      setIsReTweeted(false);
      setReTweets(reTweets - 1);
    }
  };
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isReTweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        reTweets,
        handleToggleLike: handleToggleLike,
        handleReTweet: handleReTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
