
import { Link } from 'react-router-dom';



export default function Btn({text, linkTo, hov}) {
    return (
        <button
            className={linkTo ?  `btn__link btn ${hov}` : `btn ${hov}`}
            
        >  
            {linkTo ? <Link to={linkTo}>{text}</Link> : text}
        </button>
    );
}