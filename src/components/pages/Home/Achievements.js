import React from 'react';
import { Container } from '@material-ui/core';
import { AchievementCard } from '../../common/cards';
import { achievementData } from '../../../config';

const Achievements = () => {
    return (
        <div className='achievements'>
            <Container maxWidth='md'>
                <h3 className='achievement-head'>Our Achievements</h3>
                {achievementData.map((detail, index) => (
                    <AchievementCard {...detail} key={`detail-${index}`} />
                ))}
            </Container>
        </div>
    );
};

export default Achievements;
