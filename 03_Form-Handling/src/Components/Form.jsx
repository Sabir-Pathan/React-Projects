import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleForm }) {
  const { register, handleSubmit,reset } = useForm();
function handleSubmitForm (data){
handleForm(data);
reset()
}
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex gap-3">
          <input
            {...register("image")}
            className="outline-none border-solid border-2 rounded-md px-1 border-blue-500"
            type="text"
            placeholder="Image Src"
          />
          <input
            {...register("name")}
            className="outline-none border-solid border-2 rounded-md px-1 border-blue-500"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="outline-none border-solid border-2 rounded-md px-1 border-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            {...register("cityName")}
            className="outline-none border-solid border-2 rounded-md px-1 border-blue-500"
            type="text"
            placeholder="City Name"
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
