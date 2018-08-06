import React from "react";
import ReactDOM from "react-dom";
import css from "./index.css";

class HomePage extends React.Component {
    render () {
        return (
            <div className={css.homePage}>
                <div className={css.banner} >
                    <div className={css.bannerTextBox}>
                        <div className={css.bannerTitle}>
                            Your Pool. Your Choice.
                        </div>
                        <div className={css.bannerText}>
                            Protect and modernize your pool with the most cutting edge tecnology available in South California. Get a free quote today!
                        </div>
                        <button>
                            Schedule Your Appointment TODAY >
                        </button>
                    </div>
                    <img style={{width: '33%',padding: '14px 100px', height: '90%',float: 'right'}} src={require('/Users/marlon-vilorio/SoCalPoolCovers/src/Images/full_maintenance_4.jpg')} alt='SoCalPool Banner Image'/>
                </div>
                <div className={css.homePageText}>
                    Pool owners in Utah are very safety conscious when it comes to their swimming pools. Fortunately, there are many options of swimming pool safety product. While there are many options, by far the most popular in Utah is automatic pool covers because they provide many benefit beyond just safety. Other options for pool owners include manual pool covers, pool fences, and pool alarms but we would never recommend an alarm because they don’t provide any physical barrier between the pool and children. Manual pool covers are safe and provide good benefits but much of the good is often offset by the negative of being inconvenient and difficult to use simply because it is manually operated. A pool fence, on the other hand, is only intended to enhance safety for small children around a pool but it can be used around any pool and is convenient to use. Safety organizations recommend the use of ‘multiple layers of protection’ to secure the family pool with adult supervision being emphasized as irreplaceable. An automatic safety pool cover provides great security and also provides other benefits including virtually eliminating water evaporation, adding warmth and retaining heat, and keeping the pool clean and ready for family enjoyment at any time.
                </div>
                <div className={css.homePageServiceFeature}>
                    <div className={css.homePageServiceFeatureTitle}>
                        Automatic Swimming Pool Cover Installation
                    </div>
                    <div className={css.homePageServiceFeatureText}>
                        Poolsafe has specialized in automatic pool cover installation since 1983 and is well respected by others in the industry for the innovative work that we have done. Many unique pool cover installations have been done by Poolsafe and even our basic pools receive the same attention to detail resulting in a pool cover that works great. We opened our Salt Lake office in 2015 after purchasing Elite Pool Covers from Andrew Leyer, who had been in business under that name since 2009. With Poolsafe support and expertise coupled with Andrew Leyer’s vast experience with pool cover installation, service, and repair in Utah, we are able to offer customers great value. Combining two companies with strong reputations for customer service has been a great benefit to pool cover owners in Utah. We work with pool builders and directly with homeowners. We would be happy to discuss your pool and how we can use one of our pool covers to help you make it more safe. You may call us at any time. We look forward to your call.
                    </div>
                </div>
                <div className={css.locationMap}>
                    <div className={css.homePageServiceFeatureTitle}>
                        Los Angeles, California Office
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage

//<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d845839.4135481319!2d-118.301604!3d34.093598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa220099802fa77b8!2sSoCal+Pool+Covers!5e0!3m2!1sen!2sus!4v1529801485314" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>/