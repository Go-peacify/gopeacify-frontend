import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experts from "./pages/experts";
import Intern from "./pages/Intern";
import IssuePage from "./pages/IssuePage";
import Meditation from "./pages/yoga";
import Internship from "./components/Internship";
import Patient_SignIn from "./pages/Patient_SignIn";
import Patient_LogIn from "./pages/Patient_LogIn";
import Doctor_SignIn from "./pages/Doctor_SignIn";
import Doctor_LogIn from "./pages/Doctor_LogIn";
import AllDoctor from "./pages/AllDoctor";
import Sadhna from "./pages/Yoga/sadhna";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import BrainExercise from "./pages/Yoga/brainExercise";
import GoalPlan from "./pages/Yoga/goalPlan";
import Meditation1 from "./pages/Yoga/meditation";
import Blog from "./pages/blog";
import DoctorDashboard from "./pages/DoctorDashboard";
import AboutUs from "./pages/Aboutus";
import SidebarRouting from "./components/AdminPages/SideBar/SidebarRouting";
import DocAdminLogin from "./components/AdminPages/DocAdminLogin";
import MusicalTherapy from "./pages/musicalTherapy";
import TranscedentalMeditation from "./pages/transcedentalMeditation";
import MeditationTherapy2 from "./pages/meditationTherapy2";
import MeditationTherapy3 from "./pages/meditationTherapy3";
import MeditationTherapy4 from "./pages/meditationTherapy4";
import MeditationTherapy5 from "./pages/meditationTherapy5";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter basename="/gopeacify-frontend">
      <Navbar />
      <Routes>
      <Route path="/gopeacify-frontend/admin/*" element={<SidebarRouting />} />
      <Route path="/gopeacify-frontend/admin/doclogin" element={<DocAdminLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctor" element={<Experts />} />
        <Route path="/internship" element={<Intern />} />
        <Route path="/issues" element={<IssuePage />} />
        <Route path="/patientsignin" element={<Patient_SignIn />} />
        <Route path="/doctorsignin" element={<Doctor_SignIn />} />
        <Route
          exact
          path="/patientlogin"
          element={isLoggedIn == "true" ? "" : <Patient_LogIn />}
        />
        <Route path="/doctorlogin" element={<Doctor_LogIn />} />
        <Route path="/alldoctor" element={<AllDoctor />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/yoga" element={<Meditation />} />
        <Route path="/sadhna" element={<Sadhna />} />
        <Route path="/brainExercise" element={<BrainExercise />} />
        <Route path="/goalPlan" element={<GoalPlan />} />
        <Route path="/meditation" element={<Meditation1 />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/musicalTherapy" element={<MusicalTherapy />} />
        <Route
          path="/transcedentalMeditation"
          element={<TranscedentalMeditation />}
        />
        <Route path="/MeditationTherapy2" element={<MeditationTherapy2 />} />
        <Route path="/MeditationTherapy3" element={<MeditationTherapy3 />} />
        <Route path="/MeditationTherapy4" element={<MeditationTherapy4 />} />
        <Route path="/MeditationTherapy5" element={<MeditationTherapy5 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
