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
        alert("Access Denied!");
        await auth.signOut();
        return;
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#070B14]">
      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">
        <h1 className="mb-8 text-4xl font-bold text-white">
          SQS Admin Login
        </h1>

        <button
          onClick={login}
          className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
        >
          Sign in with Google
        </button>
      </div>
    </section>
  );
}

export default AdminLogin;