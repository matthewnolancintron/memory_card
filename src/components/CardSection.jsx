import Card from './Card.jsx'


export default function CardSection({shapes,handleCardSelection}){
    let cards = shapes.map((shape) =>
      <Card key={shape.id} shape={shape.svg} name={shape.name} id={shape.id} handleCardSelection={() =>handleCardSelection(shape.id)} />
    );
    
    return (
        <ul className='cardSection'>
          {cards}
        </ul>
      );
  }