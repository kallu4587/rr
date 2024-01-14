import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Layout from '../../layout';
import TopSection from './TopSection';
import HomeAbout from './HomeAbout';
import Achievements from './Achievements';
import MediaLinks from './MediaLinks';
import ScrollToTop from '../../layout/ScrollToTop';
// import Sponsors from './Sponsors';

const HomePage = (props) => {
    const { modalOpen, handleModalClose } = props;

    return (
        <Layout home>
            <Dialog open={modalOpen} onClose={handleModalClose}>
                <div className='onload-modal'>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/eEnqrpgW8jU'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                </div>
                <DialogActions>
                    <Button onClick={handleModalClose} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <div className='home-wrapper'>
                <TopSection />
                <Achievements />
                <HomeAbout />
                {/* <Sponsors /> */}
                <MediaLinks />
                <ScrollToTop />
            </div>
        </Layout>
    );
};

export default HomePage;
