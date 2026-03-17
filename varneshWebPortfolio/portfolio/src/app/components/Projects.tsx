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
        title: 'Legal Document Automation System',
        image: '/Images/law.jpg',
        description: 'A web application designed to automate the process of creating wills for clients',
        link: 'https://nava-wilson-pc-wills.vercel.app/'
    },
    {
        title: 'CTCC Website',
        image: '/Images/CTCC.png',
        description: 'Developed a dynamic corporate directory page for the Canadian Tamils\' Chamber of Commerce, enabling clients to easily browse and access member profiles and services, enhancing user engagement and client visibility.',
        link: 'https://www.ctcc.ca/business-directory'
    },
    {
        title: 'Canadian Democracy App',
        image: '/Images/Canada.jpg',
        description: 'A capstone project that visualizes Canadian survey data, featuring heatmaps with LeafletJS and interactive charts using the Google Charts API, with data sourced from Harvard University\'s database for comprehensive querying',
        link: 'https://abdelhalemkassara-github-io.vercel.app/'
    },
    {
        title: 'GraphQL Task Management App',
        image: '/Images/graphql.webp',
        description: 'full-stack task management application built with GraphQL, Apollo Client, and React.',
        link: ''
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

