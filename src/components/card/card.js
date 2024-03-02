import './card.css';
import './flip-transition.css'

function Card({ onClick, enCard }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-front">word: {enCard.word}</div>
            <div className="card-back">sentence: {enCard.sentence}</div>
        </div>
    );
}
export default Card;