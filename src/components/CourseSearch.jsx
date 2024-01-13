import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice";

const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.courses.searchTerm);

  return (
    <div className="flex justify-end items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="input input-primary input-bordered w-full max-w-xs"
        onChange={(e) => {
          dispatch(changeSearchTerm(e.target.value));
          
        }}
        value={searchTerm}
      />
    </div>
  );
};

export default CourseSearch;
