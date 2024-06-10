import { v4 } from "uuid";


import {FeatureItem} from "../FeatureItem/FeatureItem";



export const Feature:React.FC = () => {
  return (
    <>
         <section className="features">
        <h2 className="sr-only">Features</h2>
        
        <FeatureItem 
                key={`Feature-item-1-${v4()}`} 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
        <FeatureItem 
                data-testid="feature-item-2-image-testid"
                key={`Feature-item-2-${v4()}`} 
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            />
       <FeatureItem 
                data-testid="feature-item-3-image-testid"
                key={`Feature-item-3-${v4()}`}
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money is always safe."
            />
      </section>
    </>
  )
}
