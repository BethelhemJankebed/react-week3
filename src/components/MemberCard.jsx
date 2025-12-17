import React from "react";

const MemberCard = ({ name, role, photo, bio }) => {
  return (
    <div className="member-card">
      <img src={photo} alt={name} className="member-photo" />
      <div className="member-content">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default MemberCard;
