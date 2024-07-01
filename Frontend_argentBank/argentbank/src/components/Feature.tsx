
interface FeatureProps {
    logo: string;
    title: string;
    text: string
}

export const Feature:React.FC<FeatureProps> = ({ logo, title, text }) => {
    return (
        <div className="feature-item">
            <img src={logo} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

