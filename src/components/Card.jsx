export default function Card({id,handleCardSelection,shape,name}){
    return(
      <li className="card" id={id} onClick={handleCardSelection}>
          <svg className="cardImg" width="100" height="100">
            {shape}
          </svg>
          <p className="cardName">{name}</p>
      </li>
    );
  }