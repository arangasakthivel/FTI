// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import CursorGlow from "../components/CursorGlow";

// /* ---------- ICONS ---------- */
// const EyeIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
//   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
//   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
// </svg>
// );

// const EyeSlashIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
//   <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
//   <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
//   <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
// </svg>
// );

// /* ---------- COMPONENT ---------- */
// const Auth = () => {
//   const [mode, setMode] = useState("signup"); // default → Create Account
//   const navigate = useNavigate();

//   /* ---------- STATE ---------- */
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showSignupPassword, setShowSignupPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showLoginPassword, setShowLoginPassword] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [loginError, setLoginError] = useState("");
//   const [signupError, setSignupError] = useState("");
//   const [success, setSuccess] = useState("");

//   /* ---------- PASSWORD RULES ---------- */
//   const rules = {
//     length: signupData.password.length >= 8,
//     uppercase: /[A-Z]/.test(signupData.password),
//     number: /[0-9]/.test(signupData.password),
//   };

//   const isPasswordValid = Object.values(rules).every(Boolean);

//   const showPasswordMismatch =
//     signupData.confirmPassword.length > 0 &&
//     signupData.password !== signupData.confirmPassword;

//   /* ---------- HANDLERS ---------- */
//   const handleSignupChange = (e) =>
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });

//   const handleLoginChange = (e) =>
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });

//   /* ---------- SIGNUP ---------- */
//   const handleSignup = async () => {
//     setSignupError("");
//     setSuccess("");

//     if (!isPasswordValid) {
//       setSignupError("Password does not meet requirements");
//       return;
//     }

//     if (showPasswordMismatch) {
//       setSignupError("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       await api.post("/auth/register", {
//         name: signupData.name,
//         email: signupData.email,
//         password: signupData.password,
//       });

//       setSignupData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });

//       setSuccess("Account created successfully. Please login.");
//       setMode("login");
//     } catch (err) {
//       setSignupError(err.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------- LOGIN ---------- */
//   const handleLogin = async () => {
//     setLoginError("");
//     setLoading(true);

//     try {
//       const res = await api.post("/auth/login", loginData);
//       const { token, user } = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("role", user.role);

//       if (user.role === "STUDENT") navigate("/student");
//       else if (user.role === "ADMIN") navigate("/admin");
//       else if (user.role === "STAFF") navigate("/staff");
//     } catch (err) {
//       setLoginError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] relative overflow-hidden px-6">
//       <CursorGlow />

//       {/* BACK */}
//       <motion.button
//         onClick={() => navigate("/")}
//         whileHover={{ scale: 1.05 }}
//         className="absolute top-6 left-6 z-30 font-cta px-4 py-2 rounded-full
//                    text-white/80 bg-black/40 backdrop-blur-xl border border-white/10"
//       >
//         ← Back to Home
//       </motion.button>

//       <div className="relative w-full max-w-[1200px] min-h-[640px] glass-card rounded-3xl overflow-hidden">
//         <div className="absolute inset-0 z-10 flex flex-col lg:flex-row">

//           {/* LOGIN */}
//           <div className="w-full lg:w-1/2 flex items-center px-6 lg:px-20">
//             <div className="w-full max-w-md text-white">
//               <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>

//               {success && <p className="text-green-400 text-sm mb-4">{success}</p>}
//               {loginError && <p className="text-red-400 text-sm mb-4">{loginError}</p>}

//               <input
//                 className="auth-input"
//                 name="email"
//                 placeholder="Email"
//                 value={loginData.email}
//                 onChange={handleLoginChange}
//               />

//               <div className="relative">
//                 <input
//                   className="auth-input pr-12"
//                   type={showLoginPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   value={loginData.password}
//                   onChange={handleLoginChange}
//                 />
//                 <span
//                   onClick={() => setShowLoginPassword((p) => !p)}
//                   className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
//                 >
//                   {showLoginPassword ? <EyeSlashIcon /> : <EyeIcon />}
//                 </span>
//               </div>

//               <button onClick={handleLogin} disabled={loading} className="auth-btn mt-4">
//                 Sign In
//               </button>

//               <p className="text-sm text-gray-400 mt-6">
//                 Don’t have an account?{" "}
//                 <span onClick={() => setMode("signup")} className="text-violet-400 cursor-pointer">
//                   Sign up
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* SIGNUP */}
//           <div className="w-full lg:w-1/2 flex items-center px-6 lg:px-20">
//             <div className="w-full max-w-md text-white">
//               <h2 className="text-4xl font-bold mb-6">Create Account</h2>

//               <input className="auth-input" name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} />
//               <input className="auth-input" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />

//               <div className="relative">
//                 <input
//                   className="auth-input pr-12"
//                   type={showSignupPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   value={signupData.password}
//                   onChange={handleSignupChange}
//                 />
//                 <span
//                   onClick={() => setShowSignupPassword((p) => !p)}
//                   className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
//                 >
//                   {showSignupPassword ? <EyeSlashIcon /> : <EyeIcon />}
//                 </span>
//               </div>

//               {!isPasswordValid && signupData.password && (
//                 <div className="text-xs mb-3 space-y-1">
//                   <p className={rules.length ? "text-green-400" : "text-gray-400"}>• Minimum 8 characters</p>
//                   <p className={rules.uppercase ? "text-green-400" : "text-gray-400"}>• One uppercase letter</p>
//                   <p className={rules.number ? "text-green-400" : "text-gray-400"}>• One number</p>
//                 </div>
//               )}

//               <div className="relative">
//                 <input
//                   className="auth-input pr-12"
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={signupData.confirmPassword}
//                   onChange={handleSignupChange}
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword((p) => !p)}
//                   className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
//                 >
//                   {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
//                 </span>
//               </div>

//               {showPasswordMismatch && <p className="text-red-400 text-sm mt-2">Passwords do not match</p>}
//               {signupError && !showPasswordMismatch && <p className="text-red-400 text-sm mt-2">{signupError}</p>}

//               <button onClick={handleSignup} disabled={loading} className="auth-btn mt-4">
//                 Sign Up
//               </button>

//               <p className="text-sm text-gray-400 mt-6">
//                 Already have an account?{" "}
//                 <span onClick={() => setMode("login")} className="text-violet-400 cursor-pointer">
//                   Sign in
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* DESKTOP SLIDER */}
//         <motion.div
//           animate={{ x: mode === "signup" ? "0%" : "100%" }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="hidden lg:flex absolute inset-y-0 left-0 w-1/2 z-20
//                      bg-gradient-to-br from-violet-500 to-indigo-500
//                      items-center justify-center text-white px-16"
//         >
//           <div className="text-center">
//             <h2 className="text-5xl font-extrabold mb-6">
//               {mode === "signup" ? "New Here?" : "Welcome Back"}
//             </h2>
//             <p className="text-white/90 text-lg">
//               {mode === "signup"
//                 ? "Create an account to raise and track hostel issues."
//                 : "Login to continue managing your complaints."}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import CursorGlow from "../components/CursorGlow";

/* ---------- ICONS ---------- */
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
  </svg>
);

/* ---------- COMPONENT ---------- */
const Auth = () => {
  const [mode, setMode] = useState("signup");
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [success, setSuccess] = useState("");

  const rules = {
    length: signupData.password.length >= 8,
    uppercase: /[A-Z]/.test(signupData.password),
    number: /[0-9]/.test(signupData.password),
  };

  const isPasswordValid = Object.values(rules).every(Boolean);

  const showPasswordMismatch =
    signupData.confirmPassword.length > 0 &&
    signupData.password !== signupData.confirmPassword;

  const handleSignupChange = (e) =>
    setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  /* ---------- SIGNUP ---------- */
  const handleSignup = async () => {
    setSignupError("");
    setSuccess("");

    if (!isPasswordValid) return setSignupError("Password does not meet requirements");
    if (showPasswordMismatch) return setSignupError("Passwords do not match");

    setLoading(true);
    try {
      await api.post("/auth/register", {
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      });

      setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
      setSuccess("Account created successfully. Please login.");
      setMode("login");
    } catch (err) {
      setSignupError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- LOGIN ---------- */
  const handleLogin = async () => {
    setLoginError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", loginData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      if (user.role === "STUDENT") navigate("/student");
      else if (user.role === "ADMIN") navigate("/admin");
      else if (user.role === "STAFF") navigate("/staff");
    } catch (err) {
      setLoginError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] relative overflow-hidden px-6">
      <CursorGlow />

      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        className="absolute top-6 left-6 z-30 font-cta px-4 py-2 rounded-full
                   text-white/80 bg-black/40 backdrop-blur-xl border border-white/10"
      >
        ← Back to Home
      </motion.button>

      <div className="relative w-full max-w-[1200px] min-h-[640px] glass-card rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row">

          {/* LOGIN */}
          <div
            className={`w-full md:w-1/2 items-center px-6 md:px-20 ${
              mode === "login" ? "flex" : "hidden"
            } md:flex`}
          >
            <div className="w-full max-w-md text-white">
              <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>

              {success && <p className="text-green-400 text-sm mb-4">{success}</p>}
              {loginError && <p className="text-red-400 text-sm mb-4">{loginError}</p>}

              <input
                className="auth-input"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
              />

              <div className="relative">
                <input
                  className="auth-input pr-12"
                  type={showLoginPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <span
                  onClick={() => setShowLoginPassword((p) => !p)}
                  className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showLoginPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>

              <button onClick={handleLogin} disabled={loading} className="auth-btn mt-4">
                Sign In
              </button>

              <p className="text-sm text-gray-400 mt-6">
                Don’t have an account?{" "}
                <span onClick={() => setMode("signup")} className="text-violet-400 cursor-pointer">
                  Sign up
                </span>
              </p>
            </div>
          </div>

          {/* SIGNUP */}
          <div
            className={`w-full md:w-1/2 items-center px-6 md:px-20 ${
              mode === "signup" ? "flex" : "hidden"
            } md:flex`}
          >
            <div className="w-full max-w-md text-white">
              <h2 className="text-4xl font-bold mb-6">Create Account</h2>

              <input className="auth-input" name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} />
              <input className="auth-input" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />

              <div className="relative">
                <input
                  className="auth-input pr-12"
                  type={showSignupPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                <span
                  onClick={() => setShowSignupPassword((p) => !p)}
                  className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showSignupPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>

              {!isPasswordValid && signupData.password && (
                <div className="text-xs mb-3 space-y-1">
                  <p className={rules.length ? "text-green-400" : "text-gray-400"}>• Minimum 8 characters</p>
                  <p className={rules.uppercase ? "text-green-400" : "text-gray-400"}>• One uppercase letter</p>
                  <p className={rules.number ? "text-green-400" : "text-gray-400"}>• One number</p>
                </div>
              )}

              <div className="relative">
                <input
                  className="auth-input pr-12"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                />
                <span
                  onClick={() => setShowConfirmPassword((p) => !p)}
                  className="absolute right-4 bottom-6 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </span>
              </div>

              {showPasswordMismatch && <p className="text-red-400 text-sm mt-2">Passwords do not match</p>}
              {signupError && !showPasswordMismatch && <p className="text-red-400 text-sm mt-2">{signupError}</p>}

              <button onClick={handleSignup} disabled={loading} className="auth-btn mt-4">
                Sign Up
              </button>

              <p className="text-sm text-gray-400 mt-6">
                Already have an account?{" "}
                <span onClick={() => setMode("login")} className="text-violet-400 cursor-pointer">
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP SLIDER */}
        <motion.div
          animate={{ x: mode === "signup" ? "0%" : "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="hidden md:flex absolute inset-y-0 left-0 w-1/2 z-20
                     bg-gradient-to-br from-violet-500 to-indigo-500
                     items-center justify-center text-white px-16"
        >
          <div className="text-center">
            <h2 className="text-5xl font-extrabold mb-6">
              {mode === "signup" ? "New Here?" : "Welcome Back"}
            </h2>
            <p className="text-white/90 text-lg">
              {mode === "signup"
                ? "Create an account to raise and track hostel issues."
                : "Login to continue managing your complaints."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
