import React from "react";
import ProfileSection from "./ProfileSection";
import FriendsSections from "./FriendsSections";

const UserSection = () => {
  return (
    <div style={{ flex: "0 0 30%", overflowY: "scroll", minWidth: "15rem" }}>
      <ProfileSection />
      <FriendsSections />
    </div>
  );
};

export default UserSection;
