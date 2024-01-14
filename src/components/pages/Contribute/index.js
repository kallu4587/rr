import React from 'react';
import Layout from '../../layout';
import Contribute from './Contribute';
import { contributionData } from '../../../config';

export default function ContrubuteIndex() {
    return (
        <Layout>
            <div className='contribute-page-wrapper'>
                <div className='contribute'>
                    {contributionData.map((data, key) =>
                       <Contribute  { ...data } key ={`data-${key}`} />
                    )}
                    
                </div>
            </div>
        </Layout>
    );
}
