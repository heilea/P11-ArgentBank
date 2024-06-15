
import {Feature} from '../../components/Feature/Feature';
import { Hero } from '../../components/Hero/Hero';
import featuresData from '../../data/featureData.json';


export const Home:React.FC = () => {
    return (
        <main>
            <section>
                <Hero/>
            </section>
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                {featuresData.map((feature, index) => (
                    <Feature
                        key={index}
                        title={feature.title}
                        description={feature.description} />
                ))}
            </section>
        </main>
    )
}