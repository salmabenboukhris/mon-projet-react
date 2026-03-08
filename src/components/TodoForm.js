import { useState } from "react";

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState("");
  const [erreur, setErreur] = useState("");

  const soumettreFormulaire = (e) => {
    e.preventDefault();

    if (texte.trim() === "") {
      setErreur("Veuillez saisir une tâche !");
      return;
    }

    ajouterTache(texte);
    setTexte("");
    setErreur("");
  };

  return (
    <>
      <form onSubmit={soumettreFormulaire} className="d-flex gap-2">
        <input
          className="form-control"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Nouvelle tâche"
        />

        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>

      {erreur && (
        <p className="text-danger mt-2">{erreur}</p>
      )}
    </>
  );
}

export default TodoForm;