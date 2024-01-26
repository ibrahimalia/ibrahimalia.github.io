import { Header, NavBar, TopLeftImage } from "@components";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="relative page bg-site font-Sora min-h-[100vh] text-white bg-cover bg-no-repeat">
      <TopLeftImage />
      <NavBar />
      <div className="w-full bg-[#16132d] shadow-xl ">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
