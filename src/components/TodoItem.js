import { useState } from "react";

function TodoItem({ tache, changerEtat, supprimerTache, modifierTache }) {
  const [modeEdition, setModeEdition] = useState(false);
  const [nouveauTexte, setNouveauTexte] = useState(tache.texte);

  const enregistrerModification = () => {
    modifierTache(tache.id, nouveauTexte);
    setModeEdition(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />

      {modeEdition ? (
        <>
          <input
            value={nouveauTexte}
            onChange={(e) => setNouveauTexte(e.target.value)}
          />
          <button onClick={enregistrerModification}>Sauvegarder</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: tache.terminee ? "line-through" : "none",
            }}
          >
            {tache.texte}
          </span>

          <button onClick={() => setModeEdition(true)}>Modifier</button>
        </>
      )}

      <button onClick={() => supprimerTache(tache.id)}>X</button>
    </li>
  );
}

export default TodoItem;