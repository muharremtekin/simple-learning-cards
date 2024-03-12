'use client'
import './flippable-card.css';
import Card from '../card/card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import Button from '@mui/material/Button';


function FlippableCard({ CardModel }) {
    const [showFrontInternal, setShowFrontInternal] = useState(true);

    // Kartın ön yüzünü değiştiren fonksiyon
    const handleFlip = () => {
        setShowFrontInternal((prevShowFront) => !prevShowFront);
    };
    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFrontInternal}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={handleFlip} enCard={CardModel}></Card>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;