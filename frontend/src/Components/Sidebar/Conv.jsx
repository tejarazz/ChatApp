import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

/* eslint-disable react/prop-types */
const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineusers } = useSocketContext();
  const isOnline = onlineusers.includes(conversation._id);
  return (
    <div>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded py-1 p-2 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
};

export default Conversation;
