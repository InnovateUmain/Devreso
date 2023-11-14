import { set } from "mongoose";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "./components/Spinner";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
const Signup = () => {
  const router = useRouter();
  const { loginWithRedirect } = useAuth0();
  const [val1, setVal1] = useState(true);
  const [val2, setVal2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleChanges = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "cpassword") {
      setcPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log("hello");
    const datau = {
      name: name,
      email: email,
      password: password,
    };
    const datar = {
      name: name,
      email: email,
      password: password,
    };
    if (router.query.user) {
      if (password != cpassword) {
        toast.error("Your Password and Confirm Password are not matched", {
          position: "top-center",
        });
        setLoading(false);
      } else if (email.length == 0) {
        toast.error("Please Enter Your Email", {
          position: "top-center",
        });
        setLoading(false);
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datau),
        });
        const response = await res.json();
        console.log(response);
        if (response.success) {
          toast.success("Your account has been created successfully.", {
            position: "top-right",
          });
          setLoading(false);
        } else if (!response.success) {
          toast.error(`${response.message}`, {
            position: "top-right",
          });
          setLoading(false);
        }
      }
    } else if (router.query.recruiter) {
      if (password != cpassword) {
        toast.error("Your Password and Confirm Password are not matched", {
          position: "top-center",
        });
        setLoading(false);
      } else if (email.length == 0) {
        toast.error("Please Enter Your Email", {
          position: "top-center",
        });
        setLoading(false);
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/recuitersignup`,
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datar),
          }
        );
        const response = await res.json();
        console.log(response);
        if (response.success) {
          toast.success("Your account has been created successfully.", {
            position: "top-right",
          });
          setLoading(false);
        } else if (!response.success) {
          toast.error(`${response.message}`, {
            position: "top-right",
          });
          setLoading(false);
        }
      }
    } else if (router.query.admin) {
      if (password != cpassword) {
        toast.error("Your Password and Confirm Password are not matched", {
          position: "top-center",
        });
        setLoading(false);
      } else if (email.length == 0) {
        toast.error("Please Enter Your Email", {
          position: "top-center",
        });
        setLoading(false);
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/adminsignup`,
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datar),
          }
        );
        const response = await res.json();
        console.log(response);
        if (response.success) {
          toast.success("Your account has been created successfully.", {
            position: "top-right",
          });
          setLoading(false);
        } else if (!response.success) {
          toast.error(`${response.message}`, {
            position: "top-right",
          });
          setLoading(false);
        }
      }
    }
  };
  return (
    <>
      <style jsx global>{`
        .animate-img {
          background-image: url("/asset/sphere.webp");
          background-size: cover;
          background-repeat: no-repeat;
          z-index: -1;
          transform: translateY(-50%);
          position: absolute;
          left: -30%;
          bottom: auto;
          right: auto;
          top: 58%;
          animation: rotate360 30s linear infinite; /* Adjust duration as needed */
        }
        @keyframes rotate360 {
          0% {
            transform: translateY(-50%) rotate(0deg);
          }
          100% {
            transform: translateY(-50%) rotate(360deg);
          }
        }
      `}</style>

      <div>
        <div>
          <img src="/asset/sphere.webp" className=" animate-img w-100 h-full" />
        </div>

        <Toaster />
        {loading ? (
          <Spinner />
        ) : (
          <section className="">
            <div className="flex justify-center min-h-screen">
              <div className="flex items-center w-full max-w-3xl p-4 mx-auto lg:px-4 lg:w-3/5">
                <div className="w-full">
                  <h1 className="text-2xl font-semibold tracking-wider text-white capitalize dark:text-white">
                    Create Your Account
                  </h1>

                  <p className="mt-4 text-gray-200 dark:text-gray-200">
                    Let’s get you all set up so you can verify your personal
                    account and begin setting up your profile.
                  </p>

                  <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                        {" "}
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        name="name"
                        value={name}
                        onChange={handleChanges}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johnsnow@example.com"
                        name="email"
                        onChange={handleChanges}
                        value={email}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handleChanges}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="block">
                      <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="cpassword"
                        value={cpassword}
                        onChange={handleChanges}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <button
                      className=" flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50 h-14"
                      onClick={handleSubmit}
                    >
                      <span>Sign Up </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:-scale-x-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="">
                      <a
                        onClick={() => loginWithRedirect()}
                        className="flex items-center justify-center p-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 cursor-pointer"
                      >
                        <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                          <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107"
                          />
                          <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00"
                          />
                          <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2"
                          />
                        </svg>

                        <span className="mx-2 text-gray-200">
                          Sign up with Google
                        </span>
                      </a>
                    </div>
                    <p className="mt-6 text-sm text-gray-400 flex items-center justify-center w-[50vw]">
                      Already have an account ?{" "}
                      <Link
                        href={"/login?user=true"}
                        className="text-green-500 focus:outline-none focus:underline hover:underline"
                      >
                        Sign in
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Signup;