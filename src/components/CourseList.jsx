import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../store/slices/courseSlice";


const CourseList = () => {

  const {courses} = useSelector(({courses:{data, searchTerm}}) => {
    const filteredCourses = data.filter((course) => 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {courses:filteredCourses}
  });

  
  const dispatch = useDispatch();
  
  const renderedCourses = courses.map((course) => {
    return (
      <div className="card w-96 bg-base-300 shadow-xl" key={course.id}>
        <figure>
          <img src="https://fakeimg.pl/384x200" alt="Shoes" className="w-[384px] h-[200px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-white ">{course.name}</h2>
          <p className="whitespace-normal">{course.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-primary text-white py-2">
              $ {course.cost}
            </div>
          </div>
            <button className="btn btn-error mt-2" onClick={
              () => {
                dispatch(deleteCourse(course.id));
              }
            }  >Delete</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-wrap gap-12 items-center justify-center my-8">
        {
          renderedCourses.length > 0 ? (
            renderedCourses
          ) : (
            <h1 className="text-2xl">No Courses</h1>
          )
        }
      </div>
      <div className="divider divider-primary"> 

      </div>
    </>
  );
};

export default CourseList;
