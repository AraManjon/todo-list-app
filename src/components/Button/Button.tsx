import './Button.css';

interface IProps {
    value: string;
    onClick: () => void;
    disable: boolean;
}

const Button: React.FC<IProps> = ({value, onClick, disable}) => {
    
    return (
        <button disabled={disable} className='button' onClick={()=>onClick()}>{value}</button>
    );
}

export default Button;