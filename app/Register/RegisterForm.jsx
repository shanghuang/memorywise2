"use client";

import Link from "next/link";
// import{ useState } from "react";
//import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USER, GET_USER } from "../constants";

export default function RegisterForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  //const {loading, error, queryUserData, refetch} = useQuery(GET_USER ,{
  //  variables: { data.name },
  //});
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  /*const [error, setError] = useState("");
  const router = useRouter();
  const [form, setForm] = useState({ 
    name: "",
    email: "",
    password: "",
   });*/

  /* const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }); 
   }*/

  const onSubmit = async (data) => {
    //e.preventDefault();

    //if (!form.name || !form.email || !form.password) {
    //  setError("All fields are necessary.");
    //  return;
    //}

    const { userName, email, password } = data || {};

    
    let res = await createUser({
      variables: { input: { userName, email, password } },
    });
    console.log("createUser result:" + res.data?.createUser?.userName);

    //refetch();
    //reset();

    /*try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }*/
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 text-black">
          <input
            type="text"
            placeholder="Name"
            {...register("userName", { required: true })}
          />
          {errors.userName && <span>Name is required</span>}
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email is required</span>}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
          <button id="register-button" 
                  className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
                  disabled={isSubmitting}
          >
            Register
          </button>

          {/*error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )*/}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
