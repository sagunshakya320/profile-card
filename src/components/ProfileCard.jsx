import React from "react";

const ProfileCard = ({
  image,
  name,
  role,
  description,
  skills,
  buttonText,
  showButton = true,
  isVerified = false,
  theme = "light",
  rating = "⭐⭐⭐⭐⭐",
  borderColor = "#4f46e5",
}) => {
  return (
    <div
      className={`card ${theme}`}
      style={{ borderTop: `6px solid ${borderColor}` }}
    >
      <img src={image} alt={name} className="profile-img" />

      <h2>
        {name} {isVerified && <span>✅</span>}
      </h2>

      <h4>{role}</h4>

      <p>{description}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <div className="rating">{rating}</div>

      {showButton && (
        <button>{buttonText}</button>
      )}
    </div>
  );
};

export default ProfileCard;