import { MdDeleteForever } from "react-icons/md";
import "../pages/aboutus.css";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note ">
      <span className="text-3xl pb-20 pl-4 font-normal font-mono">{text}</span>
      <div className="note-footer text-3xl">
        <small className="pr-52">{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
