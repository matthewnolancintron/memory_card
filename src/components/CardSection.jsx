import Card from './Card.jsx'


export default function CardSection(props){
    let cards = props.shapes.map((shape) =>
      <Card key={shape.id} shape={shape.svg} name={shape.name} />
    );
    
    return (
        <ul className='cardSection'>
          {cards}
        </ul>
      );
  }