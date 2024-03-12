import './card.css';
import './flip-transition.css'

function Card({ onClick, enCard }) {
    // Sentence'ı kısaltmak için bir fonksiyon tanımlayalım
    const shortenSentence = (sentence, maxLength) => {
        // Eğer cümlenin uzunluğu belirtilen maksimum uzunluktan fazlaysa...
        // if (sentence.length > maxLength) {
        //     // Cümlenin başlangıcından maksimum uzunluk kadarını alıp üç nokta (...) ekleyerek döndürelim
        //     return sentence.substring(0, maxLength) + '...';
        // }
        // Aksi halde, cümleyi olduğu gibi döndürelim
        return sentence;
    };
    const cardBackStyle = {
        fontSize: enCard.sentence.length > 50 ? '1.2em' : '2.5em', // Metnin uzunluğuna göre font boyutunu ayarla
    };
    return (
        <div className="card" onClick={onClick}>
            <div className="card-front">{enCard.word}</div>
            <div className="card-back" style={cardBackStyle}>{shortenSentence(enCard.sentence, 50)}</div>
        </div>
    );
}
export default Card;