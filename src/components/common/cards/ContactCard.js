import React from 'react';
import { Card, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { FaPhoneSquareAlt, FaWhatsapp } from 'react-icons/fa';

export const ContactCard = (props) => {
    return (
        <div className='contact-card'>
            <Card variant='outlined'>
                <CardHeader
                    avatar={
                        <Avatar style={{ color: 'black' }}>
                            {props.name[0]}
                        </Avatar>
                    }
                    title={props.name}
                    subheader={props.branch}
                    titleTypographyProps={{
                        gutterBottom: true,
                        variant: 'h6',
                        align: 'right',
                    }}
                    subheaderTypographyProps={{ align: 'right' }}
                />
                <img
                    className='image'
                    src={props.image}
                    alt={props.name}
                    title={props.name}
                />
                <div className='contact-buttons'>
                    <IconButton>
                        <a
                            href={`https://wa.me/${props.contctNo.replace(
                                '+',
                                ''
                            )}?text=${encodeURIComponent('Hi. This is ')}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaWhatsapp color='green' size='1.5em' />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href={`tel:${props.contctNo}`}>
                            <FaPhoneSquareAlt size='1.5em' />
                        </a>
                    </IconButton>
                </div>
            </Card>
        </div>
    );
};
