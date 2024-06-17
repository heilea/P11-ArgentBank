


type FeatureProps = {
  icon:string,
  alt:string
  title:string,
  description:string
}

export const Feature: React.FC<FeatureProps> = ({ icon, alt, title, description }) => {
  return (
    <>
      
        <figure className="feature-item">
          <img
            src= {icon}
            alt={alt}
            className="feature-icon"
          />
          <figcaption>
            <h3 className ='feature-item-title'>{title}</h3>
            <p>{description}</p>
          </figcaption>
        </figure>

      
    </>
  )
}
