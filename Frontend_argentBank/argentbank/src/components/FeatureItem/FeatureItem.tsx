import { Image } from "../Image/Image";



export interface FeatureProps {
  key:string,
  title:string,
  description:string,
}


export const FeatureItem:React.FC<FeatureProps> = ({ title, description}) => {
  return (
    <>
       <div className="feature-item">
            <Image />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    </>
  )
}
