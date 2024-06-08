import { useNavigate } from 'react-router-dom';

export const Button  = ({title, className, path}) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);  
    }


    return (
        <button className={className} onClick={handleClick}>{title}</button>
    )

}