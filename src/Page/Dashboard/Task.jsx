import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useTasks from "../../Hooks/useTasks";
import AddTask from "../../components/AddTask";
const Task = () => {
  const [tasks, isLoading, refetch] = useTasks();
  if (isLoading) {
    return "loading...";
  }
  const handleUpdate = (id) => {
  };
  return (
    <div className="px-2">
      <AddTask />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border border-yellow-700 rounded-md  py-2 px-2 duration-300">
          <h2 className="text-2xl font-semibold uppercase text-yellow-600">
            To-Do
          </h2>
          <ul>
            {tasks ? (
              tasks?.map((task, id) => (
                <li key={task._id} className="flex gap-3 items-center border p-2 justify-between">
                  {id + 1}. {task.title}
                  <p className="flex gap-1 items-center">
                    <button onClick={() => handleUpdate(task._id)}>
                      <FaEdit className="text-xl cursor-pointer text-blue-600" />
                    </button>
                    <MdDelete className="text-xl cursor-pointer text-red-700" />
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
    </div>
  );
};

export default Task;
