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
        title: 'Medical Report AI Examiner',
        image: '/Images/healthcare.jpg',
        description: 'Developed a web application that uses AI to examine medical reports and provide a summary of the report.',
        link: 'https://medical-report-ai-explainer-fronten.vercel.app/'
    },
    {
        title: 'Canadian Democracy App',
        image: '/Images/Canada.jpg',
        description: 'A capstone project that visualizes Canadian survey data, featuring heatmaps with LeafletJS and interactive charts using the Google Charts API, with data sourced from Harvard University\'s database for comprehensive querying',
        link: 'https://abdelhalemkassara-github-io.vercel.app/'
    },
    {
        title: 'Anti Money Laundering AI',
        image: '/Images/BankAI.jpg',
        description: 'Regulatory Technology App that assess transactions, flags suspicious activity using AI and creates Audit Trails.',
        link: 'https://bank-ai-neon.vercel.app/'
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

