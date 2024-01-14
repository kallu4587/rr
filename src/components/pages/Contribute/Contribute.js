import React from 'react';


export default function Contribute(props) {
    return (
        <>
            <div className='contribution-details-wrapper'>
                <div className='contribution'>
                    <h1 className='contribution-title'>
                        YOUR CONTRIBUTION 🤝🏻 OUR EFFORTS
                    </h1>
                    <p className='contribution-description'>
                        Since 2013 we are participating in ABU Robocon, our only
                        goal is to represent our country in International
                        Robocon and win the International Title. We have always
                        found many intriguing and interesting technologies,
                        motivating us to investigate and research as many
                        sources of information as we could get our hands on.
                        Looking back, it’s that passion and commitment to
                        exploration and discovery that has contributed to our
                        research and success. While we prepering for stepping
                        up,to make Robots we require many components which are
                        quite expensive. As a students we all are getting
                        difficulties to arrange kind of money require to
                        purchase those components. So, we all members of
                        Robotics Research Lab kindly request our viewers,
                        Followers and fellow Alumnis to contribute. As we have
                        to raise fund for upcoming events, <strong>YOUR KEY CONTRIBUTION
                        LEADS TO LEAD OUR COUNTRY IN INTERNATIONAL
                        CHAMPIONSHIPS.</strong>
                    </p>
                    <div className='contribution-details'>
                        <div className='achievement-card' style={{backgroundColor:"#ffb99836"}}>
                            <div className='a-details'>
                                <h2 className='a-title'>
                                Finance Manager
                                </h2>
                                <h3 className='a-year'>{props.cashierName}</h3>
                                <div className='a-role'>
                                    <p className='a-roletype'>Contribution Details</p>
                                    <p className='a-name'><a href={`tel:${props.paymentPhone}`}>Contact: {props.paymentPhone}</a></p>
                                </div>
                                <div className='a-role'>
                                    <p className='a-roletype'>PhonePe/GPay</p>
                                    <p className='a-name'><a href={`upi://pay?pa=${props.paymentUpi}&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1`}>{props.paymentPhone}</a></p>
                                </div>
                                <div className='a-role'>
                                    <p className='a-roletype'>UPI </p>
                                    <p className='a-name'><a href={`upi://pay?pa=${props.paymentUpi}&amp;pn=FNAME SNAME K&amp;cu=INR" class="upi-pay1`}>{props.paymentUpi}</a></p>
                                </div>
                                
                            </div>
                            <div className='image-wrapper'>
                                <img style={{borderRadius:'8px',height:'100%',width:'100%'}}
                                    src={props.paymentQr}
                                    alt={props.paymentUpi}
                                    className='card-image'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
