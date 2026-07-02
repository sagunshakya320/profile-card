import mentors from "../data/mentors";
import ProfileCard from "../components/ProfileCard";

const Mentors = () => {
  return (
    <>
      <h1>Mentors</h1>

      <div className="container">
        {mentors.map((mentor, index) => (
          <ProfileCard key={index} {...mentor} />
        ))}
      </div>
    </>
  );
};

export default Mentors;