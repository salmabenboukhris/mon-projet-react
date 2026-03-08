import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };
  const modifierTache = (id, nouveauTexte) => {
  setTaches(
    taches.map((t) =>
      t.id === id ? { ...t, texte: nouveauTexte } : t
    )
  );
};

  return (
   <div className="container mt-5">
  <h1 className="text-center mb-4">To-Do List Interactive</h1>
  <TodoForm ajouterTache={ajouterTache} />
  <TodoList
    taches={taches}
    changerEtat={changerEtat}
    supprimerTache={supprimerTache}
    modifierTache={modifierTache}
  />
</div>
  );
}

export default App;