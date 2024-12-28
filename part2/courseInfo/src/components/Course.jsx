import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  let parts = course.parts;
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  console.log(total);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={parts} />
      <Total sum={total} />
    </div>
  );
};

export default Course;
