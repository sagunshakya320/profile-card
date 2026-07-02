import alumni from "../data/alumni";
import ProfileCard from "../components/ProfileCard";

const Alumni = () => {
  return (
    <>
      <h1>Alumni</h1>

      <div className="container">
        {alumni.map((person, index) => (
          <ProfileCard key={index} {...person} />
        ))}
      </div>
    </>
  );
};

export default Alumni;