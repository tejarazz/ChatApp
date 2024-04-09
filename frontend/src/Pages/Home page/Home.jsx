import Sidebar from "../../Components/Sidebar/Sidebar";
import Messagecontainer from "../../Components/messages/Messagecontainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-700">
      <Sidebar />
      <Messagecontainer />
    </div>
  );
};

export default Home;
