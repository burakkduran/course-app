import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = () => (e) => {
    e.preventDefault();
    dispatch(
      addCourse({
        name,
        description,
        cost,
      })
    );
  };
  return (
    <div className="flex flex-col gap-6 items-center mt-8">
      <h3 className="text-2xl">Courses</h3>
      <form
        className="flex flex-wrap gap-12 items-center "
        onSubmit={handleSubmit()}
      >
        <input
          type="text"
          placeholder="Course Name"
          className="input input-bordered input-primary  max-w-xs "
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
          value={name}
          required
        />
        <textarea
          className="textarea textarea-primary w-72 max-h-12"
          placeholder="Description"
          onChange={(e) => {
            dispatch(changeDescription(e.target.value));
          }}
          value={description}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered input-primary max-w-24"
          onChange={(e) => {
            dispatch(changeCost(parseInt(e.target.value)));
          }}
          value={cost}
          min={1}
        />
        <button className="btn btn-active btn-success dark:text-gray-200 self-end">
          Add Course
        </button>
      </form>
      <div className="divider divider-primary text-xl">My Courses</div>
    </div>
  );
};

export default CourseForm;
