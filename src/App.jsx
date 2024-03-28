import "./App.css";
import ProfileCard from "./components/Card/card-profile/index.jsx";
import JessicaImg from "./assets/avatar-jessica.jpeg"

function App() {
  return (
    <>
      <ProfileCard UserImg={JessicaImg} UserName="Jessica Randall" UserLocation="London, United Kingdom" UserRole="Front-end developer and avid reader." />
    </>
  );
}

export default App;
