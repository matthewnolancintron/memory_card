export default function TopSection({score,bestScore}){
   return(
    <header className="topSection">
        <p>Game title</p>
        <section className="scoreSection">
            <p>Score: {score} </p>
            <p>Best Score: {bestScore} </p>
        </section>
    </header>
   ); 
}