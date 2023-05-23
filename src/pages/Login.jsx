import React, { useState } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import Separator from "../components/Separator";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const { user } = useAuthContext();

  return (
    <div>
      <div className="flex flex-col justify-center">
        <Separator />

        {user && user.email && <Navigate to="/allBosses" />}

        {!user && (
          <div>
            <div className="bg-slate-800/90 flex flex-col justify-evenly">
              <h2
                className="
              p-4 justify-center mx-auto
              text-blue-200 text-xl w-full md:text-3xl text-center font-press-start uppercase
              "
              >
                Login
              </h2>
            </div>
            <div className="text-blue-200 font-bold bg-slate-800/90">
              <Form
                className="px-8 sm:w-3/4 xl:w-1/2 w-full p-2 flex flex-col text-left mx-auto uppercase"
                onSubmit={handleSubmit}
              >
                <div className="mb-2 flex flex-row justify-between">
                  <label className="w-1/3 font-press-start" htmlFor="email">
                    email:
                  </label>
                  <input
                    className="w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Required"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-2 flex flex-row justify-between">
                  <label className="w-1/3 font-press-start" htmlFor="password">
                    password:
                  </label>
                  <input
                    className="w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Required"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button
                  disabled={isLoading}
                  className="uppercase mt-8 font-press-start text-lg hover:text-yellow-200 hover:bg-red-800 hover:border-red-900 text-blue-200 capitalize bg-blue-900 my-2 border-blue-900 border-4 p-1 rounded-lg"
                >
                  Login
                </button>
                {error && <div>{error}</div>}
              </Form>
              <p className="ml-4">
                Need an Account?
                <Link
                  to={"/register"}
                  className="text-blue-600 hover:text-yellow-200"
                >
                  
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        )}

        <Separator />
      </div>
    </div>
  );
};

export default Login;
