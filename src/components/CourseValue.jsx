import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalCost = filteredCourses.reduce((acc, course) => {
      return acc + course.cost;
    }, 0);

    return totalCost;
  });

  return <p className="flex justify-end text-2xl gap-1">Total Cost of Courses:<span className="text-primary">{totalCost}$</span></p>;
};

export default CourseValue;
