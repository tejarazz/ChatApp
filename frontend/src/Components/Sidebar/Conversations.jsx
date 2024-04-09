import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conv";

const Conversations = () => {
  const { loading, conversations } = useGetConversations(); // Destructuring correctly here

  // Ensure conversations is an array before mapping over it
  const conversationList = conversations || [];

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationList.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversationList.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner mx-auto"></span>}
    </div>
  );
};

export default Conversations;
