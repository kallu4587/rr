import React from 'react';
import { Container } from '@material-ui/core';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MediaLinks = (props) => {
    return (
        <div className='medialinks-wrapper'>
            <Container>
                <h1 className='content-title'>Follow Us</h1>
                <div className='media-links'>
                    <a
                        href='https://www.youtube.com/channel/UCl6xv4BVpB7v9UcN9HFWwjg/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <YouTubeIcon
                            className='media-button youtube'
                            sx={{ fontSize: '60px', color: 'red' }}
                            
                            alt='youtube'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/company/robotics-research-lab'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <LinkedInIcon
                            className='media-button linkedin'
                            sx={{ fontSize: '60px', color: 'blue' }}
                            alt='linkedin'
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/robotics_research_lab/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <InstagramIcon
                            className='media-button instagram'
                            sx={{ fontSize: '60px', color: 'white' }}
                            alt='instagram'
                        />
                    </a>
                </div>
            </Container>
        </div>
    );
};
export default MediaLinks;
