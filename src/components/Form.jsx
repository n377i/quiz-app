import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../components/Form.css";

const Form = ({ onSubmit, cardToEdit }) => {
  const [question, setQuestion] = useState(cardToEdit?.question || "");
  const [answer, setAnswer] = useState(cardToEdit?.answer || "");
  const [tags, setTags] = useState(cardToEdit?.tags.join(", ") || "");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (cardToEdit) {
      setQuestion(cardToEdit.question);
      setAnswer(cardToEdit.answer);
      setTags(cardToEdit.tags.join(", "));
    } else {
      setQuestion("");
      setAnswer("");
      setTags("");
    }
  }, [cardToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!question || !answer || !tags) {
      showMessage("Please fill in all input fields.", "error");
      return;
    }

    const updatedCard = {
      question,
      answer,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    onSubmit(updatedCard);

    showMessage(
      cardToEdit
        ? "Quiz card successfully updated."
        : "Quiz card successfully added.",
      "success"
    );
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
      if (type === "success") {
        navigate("/");
      }
    }, 1000);
  };

  return (
    <form id="form" className="form card" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="question">
        Your question
      </label>
      <textarea
        id="question"
        className="form__field"
        name="question"
        rows="4"
        maxLength="150"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      ></textarea>
      <small className="form__character-count">
        <span>{150 - question.length}</span> characters left
      </small>
      <label className="form__label" htmlFor="answer">
        Your answer
      </label>
      <textarea
        id="answer"
        className="form__field"
        name="answer"
        rows="4"
        maxLength="150"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      ></textarea>
      <small className="form__character-count">
        <span>{150 - answer.length}</span> characters left
      </small>
      <label className="form__label" htmlFor="tags">
        Tags <small>(Separate with comma)</small>
      </label>
      <input
        id="tags"
        className="form__field"
        type="text"
        name="tags"
        maxLength="80"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
      />
      <div
        className={`form__message ${messageType} ${message ? "" : "hidden"}`}
      >
        {message}
      </div>
      <Button className="button form__button" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
