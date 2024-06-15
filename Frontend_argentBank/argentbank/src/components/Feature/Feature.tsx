
import chatIcon from '../../assets/images/icon-chat.png';

interface FeatureProps {
  title:string,
  description:string
}

export const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <>
      <section className="features-item">
        <h2 className="sr-only">Features</h2>

        <figure>
          <img
            src={chatIcon}
            alt="Chat Icon"
            className="feature-icon"
          />
          <figcaption>
            <h3 className ='feature-item-title'>{title}</h3>
            <p>{description}</p>
          </figcaption>
        </figure>

      </section>
    </>
  )
}
