import { useNavigate } from 'react-router-dom';


interface ButtonProps  {
    title:string;
    className:string;
    path?:string
}

export const Button:React.FC<ButtonProps>  = ({title, className, path}) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path ?? "/profile");  
    }


    return (
        <>
            <button className={className} onClick={handleClick}>{title}</button>
        </>
    )

}