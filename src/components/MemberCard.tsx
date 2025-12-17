import React from "react";

export interface MemberCardProps {
  name: string;
  role: string;
  photo: string; // URL or public path
  bio: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, photo, bio }) => {
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
