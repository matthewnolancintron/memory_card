export default function Card(props){
    return(
      <li className="card">
          <svg width="100" height="100">
            {props.shape}
          </svg>
          <p>{props.name}</p>
      </li>
    );
  }