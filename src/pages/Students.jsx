import students from "../data/students";
import ProfileCard from "../components/ProfileCard";

const Students = () => {
  return (
    <>
      <h1>Students</h1>

      <div className="container">
        {students.map((student, index) => (
          <ProfileCard key={index} {...student} />
        ))}
      </div>
    </>
  );
};

export default Students;