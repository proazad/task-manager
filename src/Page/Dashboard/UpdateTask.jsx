import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useSingleTask from "../../Hooks/useSingleTask";

const UpdateTask = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [task, isLoading, refetch] = useSingleTask(id);
  console.log(task);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const task = {
      title: data.title,
      deadline: data.deadline,
      priority: data.priority,
      description: data.description,
      position: "to-do",
    };
    axiosPublic.post("/task", task).then((res) => {
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Update Task</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title Field  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="form-control">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                {...register("title", { required: true })}
                className="input input-bordered input-primary"
                defaultValue={task?.title}
              />
              {errors.title && <span>Title field is required</span>}
            </div>
            {/* Piority Field  */}
            <div className="form-control">
              <div className="label">
                <span className="label-text">Priority</span>
              </div>
              <select
                {...register("priority")}
                className="select select-bordered select-primary"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
              {errors.priority && <span>Priority field is required</span>}
            </div>
            {/* Deadline Field  */}
            <div className="form-control">
              <div className="label">
                <span className="label-text">Deadline</span>
              </div>
              <input
                type="datetime-local"
                {...register("deadline", { required: true })}
                className="input input-bordered input-primary"
                defaultValue={task?.deadline}
              />
              {errors.deadline && <span>Deadline field is required</span>}
            </div>
          </div>

          {/* Description Field  */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered textarea-primary"
              defaultValue={task?.description}
            ></textarea>
            {errors.description && <span>Description field is required</span>}
          </div>

          <div className="form-control my-4">
            <input className="btn btn-primary btn-wide" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
