import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import starPlatinumImage from '../assets/star-platinum.jpg';
import silverChariotImage from '../assets/Silver Chariot Stand.jpg';
import zaWarudoImagem from '../assets/Za Warudo Stand.png';
import hierophantGreenImage from '../assets/Hierophant Green Stand.png';
import starPlatinumSound from '../assets/star-platinum.mp3'
import silverChariotSound from '../assets/y2mate_cn87NwR.mp3'
import zaWarudoSound from '../assets/za-warudo-stop-time-sound.mp3'
import hierophantGreenSound from '../assets/emeraldsplash.mp3'

const Modal = (props) => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sound, setSound] = useState();

    const texts = [
        "Você se identifica mais com Star Platinum!",
        "Você se identifica mais com Silver Chariot!",
        "Você se identifica mais com Za Warudo!",
        "Você se identifica mais com Hierophant Green!",
    ];

    useEffect(() => {
        let a = 0;
        let b = 0;
        let c = 0;

        props.answers.forEach(e => {
            switch (e) {
                case 0:
                    a++;
                    break;
                case 1:
                    b++;
                    break;
                case 2:
                    c++;
                    break;
                default:
                    break;
            }
        });

        if (a > b && a > c){
            setNum(10);
            setText(texts[0]);
            setSound(starPlatinumSound);
        } else if(b > a && b > c){
            setNum(20);
            setText(texts[1]);
            setSound(silverChariotSound);
        } else if(c > a && c > b){
            setNum(30);
            setText(texts[2]);
            setSound(zaWarudoSound);
        } else {
            setNum(40);
            setText(texts[3]);
            setSound(hierophantGreenSound);
        }

        // Exibir o modal após o cálculo das respostas
        setIsModalVisible(true);
    }, [props.answers]);

    const getImageUrl = () => {
        switch (num) {
            case 10:
                return starPlatinumImage;
            case 20:
                return silverChariotImage;
            case 30:
                return zaWarudoImagem;
            case 40:
                return hierophantGreenImage;
            default:
                return null;
        }
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    function play() {
        new Audio(sound).play();
    }

    return (
        <CSSTransition
            in={isModalVisible}
            timeout={1000}
            classNames="modal"
            unmountOnExit
        >
            <div className="modal-container">
                <div className="modal-card">
                    <img src={getImageUrl()} alt={`Imagem para ${num}`} />
                    <p>{text}{play()}</p>
                    <button onClick={handleCloseModal}>Fechar</button>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Modal;
