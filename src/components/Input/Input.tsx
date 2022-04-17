import './Input.css';

interface IProps {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
}

const Input: React.FC<IProps> = ({value, setValue, placeholder}) => {
    
    return (
        <input className='input' onChange={(e)=>setValue(e.target.value)} placeholder={placeholder} value={value}/>
    );
}

export default Input;