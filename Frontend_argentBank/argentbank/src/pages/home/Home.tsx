
import { Header } from '../../components/Header/Header';
import {Feature} from '../../components/Feature/Feature';
import featuresData from '../../data/featureData.json';


export const Home:React.FC = () => {
    return (
        <main>
            <Header />
            <section className='icon'>
                <h2 className='sr-only'>Features</h2>
                {featuresData.map((feature, index) => (
                    <Feature
                        key={index}
                        icon={feature.icon}
                        alt={feature.alt}
                        title={feature.title}
                        description={feature.description} />
                ))}
            </section>
        </main>
    )
}