export default function Card(props){
    return(
      <li className="card">
          <svg className="cardImg" width="100" height="100">
            {props.shape}
          </svg>
          <p className="cardName">{props.name}</p>
      </li>
    );
  }