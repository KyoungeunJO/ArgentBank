import './Features.css'
import FeatureItem from '../FeatureItem/FeatureItem'
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'

function Feautres() {
    return(
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem>
                <img src={chat} alt="Chat Icon" className="feature-icon"/>
                <h3 className="feature-item-title">You are our #1 priority</h3>
                <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </FeatureItem>

            <FeatureItem>
                <img src={money} alt="money Icon" className="feature-icon"/>
                <h3 className="feature-item-title">More savings means higher rates</h3>
                <p>The more you save with us, the higher your interest rate will be!</p>
            </FeatureItem>

            <FeatureItem>
                <img src={security} alt="security Icon" className="feature-icon"/>
                <h3 className="feature-item-title">Security you can trust</h3>
                <p>We use top of the line encryption to make sure your data and money is always safe.</p>
            </FeatureItem>
      </section>
    )
}

export default Feautres