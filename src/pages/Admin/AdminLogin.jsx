import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../../firebase/firebase";

function AdminLogin() {
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const allowedEmails = [
        "rkcharanraj835@gmail.com",
        "gnanavelv123@gmail.com",
      ];

      if (!allowedEmails.includes(user.email)) {
        toast.success("Access Denied!");
        await auth.signOut();
        return;
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] px-4">
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-2xl">

      <div className="mb-8">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/30">
          <span className="text-3xl">⚡</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          SQS Admin
        </h1>

        <p className="mt-3 text-sm text-gray-400">
          Manage your community hub securely
        </p>
      </div>

      <button
        onClick={login}
        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.27c0-.78-.07-1.53-.22-2.25H12v4.26h5.27a4.5 4.5 0 0 1-1.95 2.95v2.45h3.16c1.85-1.7 2.87-4.2 2.87-7.41z"
          />
          <path
            fill="#34A853"
            d="M12 22c2.7 0 4.97-.9 6.63-2.32l-3.16-2.45c-.88.6-2 .95-3.47.95-2.67 0-4.93-1.8-5.74-4.22H2.99v2.53A10 10 0 0 0 12 22z"
          />
          <path
            fill="#FBBC05"
            d="M6.26 13.96a6 6 0 0 1 0-3.92V7.51H2.99a10 10 0 0 0 0 8.98l3.27-2.53z"
          />
          <path
            fill="#EA4335"
            d="M12 5.82c1.55 0 2.94.53 4.04 1.57l3.03-3.03C16.96 2.8 14.7 2 12 2a10 10 0 0 0-9.01 5.51l3.27 2.53C7.07 7.62 9.33 5.82 12 5.82z"
          />
        </svg>

        Sign in with Google
      </button>

      <p className="mt-8 text-xs text-gray-500">
        Protected access • SQS Community Hub
      </p>

    </div>
  </section>
);
}

export default AdminLogin;