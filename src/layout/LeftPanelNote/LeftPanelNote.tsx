
import { useContext } from 'react';
import './Main.css'
import { MyContext } from '../../context/context';

const bodyNote: HTMLElement | null = document.querySelector(".body-note") ;

function LeftPanelNote () {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error('Not context LeftPanelNote');
    }

    const { showDiv } = context;


    return (
        <div className="pure-menu">
            <div className="left-panel-note menu-item">
                {showDiv  && <BodyNote />}
            </div>
        </div>
    )
}

function BodyNote () {

    const handleClick = () => {
        if ( bodyNote != null) {
            console.log(1111)
            bodyNote.style.background = "#18c7e3";
            bodyNote.style.transitionDuration = "1s";
        }
        
    }

    return (
        <div className="body-note" onClick={handleClick}>
            <h3 className="name-note">Новая заметка</h3>
        </div>
    )
}


export default LeftPanelNote;