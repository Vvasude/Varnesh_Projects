import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const mediaCards = [
    {
        title: 'Heart Attack Prediction App',
        image: '/Images/HeartAttack.jpg',
        description: 'A Python-based machine learning application designed to predict whether a patient is at risk of a heart attack',
        link: 'https://colab.research.google.com/drive/1FYGPRSEGvd0urNlZmRJHx-gq6ANn3IpX?usp=sharing'
    },
    {
        title: 'CTCC Website',
        image: '/Images/CTCC.png',
        description: 'Developed a dynamic corporate directory page for the Canadian Tamils\' Chamber of Commerce, enabling clients to easily browse and access member profiles and services, enhancing user engagement and client visibility.',
        link: 'https://corporate.ctcc.ca/'
    },
    {
        title: 'Canadian Democracy App',
        image: '/Images/Canada.jpg',
        description: 'A capstone project that visualizes Canadian survey data, featuring heatmaps with LeafletJS and interactive charts using the Google Charts API, with data sourced from Harvard University\'s database for comprehensive querying',
        link: 'https://abdelhalemkassara-github-io.vercel.app/'
    },
    {
        title: 'Weather App',
        image: '/Images/Weather.jpg',
        description: 'Built a responsive weather application that provides real-time weather updates, forecasts, and location-based data, offering users a seamless experience with detailed weather insights and interactive features.',
        link: 'varnesh-weatherapp.vercel.app'
    },
];

export default function Projects() {
    return (
        <div id="Projects">
            <h2 className="text-3xl font-bold mb-16 text-center">Projects</h2>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                {mediaCards.map((card, index) => (
                    <Card
                        key={index}
                        sx={{
                            maxWidth: 345,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        <CardMedia
                            sx={{ height: 140 }}
                            image={card.image}
                            title={card.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'flex-start', padding: 2 }}>
                            <Button
                                size="small"
                                sx={{ color: 'white' }}
                                href={card.link} // Add link here
                                target="_blank" // Open link in a new tab
                                rel="noopener noreferrer" // Security measure
                            >
                                Link
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

