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
        link: 'https://github.com/Vvasude/Varnesh_Projects'
    },
    {
        title: 'Full Stack Spotify Clone',
        image: '/Images/Music.jpg',
        description: 'A full-stack CRUD application that simulates the key features and user experience of Spotify, hosted on AWS cloud infrastructure with JWT-based authentication for secure user access.',
        link: 'https://github.com/Vvasude/Varnesh_Projects'
    },
    {
        title: 'Canadian Democracy App',
        image: '/Images/Canada.jpg',
        description: 'A capstone project that visualizes Canadian survey data, featuring heatmaps with LeafletJS and interactive charts using the Google Charts API, with data sourced from Harvard University\'s database for comprehensive querying',
        link: 'https://github.com/Vvasude/Varnesh_Projects'
    },
    {
        title: 'Course Outline App',
        image: '/Images/University.jpg',
        description: 'A full-stack application that allows professors to create and manage course outlines, hosted on GCP with secure user authentication handled by Auth0, and stored data using MongoDB.',
        link: 'https://github.com/Vvasude/Varnesh_Projects'
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
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

