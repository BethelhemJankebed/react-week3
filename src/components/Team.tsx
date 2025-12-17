import React from "react";
import MemberCard from "./MemberCard";

export interface Member {
  name: string;
  role: string;
  photo: string; // public path, e.g., /assets/members/alice.svg
  bio: string;
}

const members: Member[] = [
  {
    name: "Alice Johnson",
    role: "Team Lead",
    photo: "/assets/members/alice.svg",
    bio: "Leads the team and coordinates cross-functional projects.",
  },
  {
    name: "Bob Smith",
    role: "Frontend Engineer",
    photo: "/assets/members/bob.svg",
    bio: "Builds delightful user interfaces with React and TypeScript.",
  },
  {
    name: "Carol Nguyen",
    role: "Backend Engineer",
    photo: "/assets/members/carol.svg",
    bio: "Designs scalable APIs and optimizes server-side performance.",
  },
];

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <header className="team-header">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          A small, focused crew building delightful experiences.
        </p>
      </header>
      <div className="team-grid">
        {members.map((m) => (
          <MemberCard
            key={m.name}
            name={m.name}
            role={m.role}
            photo={m.photo}
            bio={m.bio}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
