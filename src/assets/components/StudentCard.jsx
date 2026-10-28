function StudentCard(props) {
  return (
    <div>
      <img
        src={props.image}
        alt={props.nom}
        className="student-image"
      />

      <h2>Fiche étudiant</h2>

      <p>Nom & Prénom : {props.nom} {props.pre}</p>
      <p>Email : {props.mail}</p>
      <p>Téléphone : {props.num}</p>
      <p>Filière : {props.fill}</p>
      <p>Année d'étude : 1</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

      <button>contacter</button>
    </div>
  );
}

export default StudentCard;
