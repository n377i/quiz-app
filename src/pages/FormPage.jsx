import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Form from "../components/Form";

const FormPage = () => {
  const location = useLocation();
  const cardToEdit = location.state?.cardToEdit || null;
  const isEditMode = !!cardToEdit;

  const handleFormSubmit = (formData) => {
    // Get cards array from local storage
    const storedCards = JSON.parse(localStorage.getItem("quizCards")) || [];

    if (cardToEdit) {
      const updatedCards = storedCards.map((card, index) =>
        index === cardToEdit.index ? { ...card, ...formData } : card
      );
      localStorage.setItem("quizCards", JSON.stringify(updatedCards));
    } else {
      // Add new card
      const updatedCards = [...storedCards, formData];
      // Save updated cards array to local storage
      localStorage.setItem("quizCards", JSON.stringify(updatedCards));
    }
  };

  return (
    <>
      <Layout
        isSubPage
        isEditMode={isEditMode}
        title={cardToEdit ? "Edit Quiz Card" : "Add Quiz Card"}
      >
        <Form onSubmit={handleFormSubmit} cardToEdit={cardToEdit} />
      </Layout>
    </>
  );
};

export default FormPage;
