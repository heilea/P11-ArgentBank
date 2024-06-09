import { useNavigate } from 'react-router-dom';


//Definition du type des props du composant boutton
export interface ButtonProps {
    title:string,
    className:string,
    path:string,
}
export const Button:React.FC<ButtonProps>  = ({title, className, path}) => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);  
    }


    return (
        <>
            <button className={className} onClick={handleClick}>{title}</button>
        </>
    )

}