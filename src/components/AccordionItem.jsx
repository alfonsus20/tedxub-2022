import { Icon } from "@iconify/react";
import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const accordionRef = useRef();

  return (
    <li className={`${active ? "active" : ""} py-2 px-2 overflow-hidden max-w-6xl m-auto`}>
      <button className={`bg-main-3 font-jakarta text-white text-left flex flex-wrap w-full justify-between items-center p-5 cursor-pointer border-none ${active ? "rounded-t-xl rounded-b-none" : "rounded-t-xl rounded-b-xl"} overflow-hidden transition-all duration-200`} onClick={onToggle}>
        {question}
        <Icon icon="akar-icons:chevron-down" className={`text-lg ${active ? "rotate-180" : ""} transition-all duration-200`} />
      </button>
      <div
        ref={accordionRef}
        className="h-0 overflow-hidden transition-all ease-in-out duration-200 rounded-b-xl"
        style={
          active
            ? { height: accordionRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="bg-white p-5 whitespace-pre">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;