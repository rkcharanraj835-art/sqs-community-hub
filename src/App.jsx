import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { db } from "./firebase/firebase";
console.log(db);
function App() {
  return (
    <>
      <ScrollToTop />

      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;