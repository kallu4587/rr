import React from 'react';

export const AchievementCard = (props) => {
    return (
        <div className='achievement-card'>
            <div className='a-details'>
                <h2 className='a-title'>{props.achivement}</h2>
                <div className='a-role'>
                    <p className='a-roletype'>Theme</p>
                    <h3 className='a-year'>
                        {props.title} ({props.year})
                    </h3>
                </div>
                <div className='a-role'>
                    <p className='a-roletype'>Host City</p>
                    <h6 className='a-name'>{props.hostCity}</h6>
                </div>
                <div className='a-role'>
                    <p className='a-roletype'>Team Leader</p>
                    <p className='a-name'>{props.teamLeader}</p>
                </div>
                <div className='a-role'>
                    <p className='a-roletype'>Operator</p>
                    <p className='a-name'>{props.operator}</p>
                </div>
                <div className='a-role'>
                    <p className='a-roletype'>Pit Crews</p>
                    <p className='a-name'>{props?.pitCrews?.join(', ')}</p>
                </div>
            </div>
            <div className='image-wrapper'>
                <img
                    src={props.image}
                    alt={props.year}
                    className='card-image'
                    style={{ borderRadius: '5px' }}
                />
            </div>
        </div>
    );
};
