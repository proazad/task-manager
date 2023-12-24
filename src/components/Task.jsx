import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useTasks from "../Hooks/useTasks";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Task = () => {
  const [tasks, isLoading, refetch] = useTasks();
  const axiosPublic = useAxiosPublic();
  if (isLoading && !tasks) {
    return "Loading.....";
  }
  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/task/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Task has been Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="border border-yellow-700 rounded-md  py-2 px-2 duration-300">
        <h2 className="text-2xl font-semibold uppercase text-yellow-600">
          To-Do
        </h2>
        <ul>
          {tasks ? (
            tasks?.map((task, id) => (
              <li
                key={task._id}
                className="flex gap-3 items-center border p-2 justify-between"
              >
                {id + 1}. {task.title}
                <p className="flex gap-1 items-center">
                  <Link to={`/dashboard/task/${task._id}`}>
                    <FaEdit className="text-xl cursor-pointer text-blue-600" />
                  </Link>
                  <MdDelete
                    onClick={() => handleDeleteTask(task._id)}
                    className="text-xl cursor-pointer text-red-700"
                  />
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-400">There are no Task</p>
          )}
        </ul>
      </div>

      <div className="border border-blue-700 rounded-md py-2 px-2 p-5 duration-300">
        <h2 className="text-2xl font-semibold text-blue-600 uppercase">
          On Going
        </h2>
        <ul>
          <li className="flex gap-2 items-center">
            1. Add Task Page/React Hook Form
            <p className="flex gap-1 items-center">
              <FaEdit className="text-xl cursor-pointer text-blue-600" />
              <MdDelete className="text-xl cursor-pointer text-red-700" />
            </p>
          </li>
        </ul>
      </div>

      <div className="border border-green-700 rounded-md py-2 px-2 p-5 duration-300">
        <h2 className="text-2xl font-semibold text-green-600 uppercase">
          Completed
        </h2>
        <ul>
          <li className="flex gap-3 items-center">
            1. Add Task Page/React Hook Form
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task;
