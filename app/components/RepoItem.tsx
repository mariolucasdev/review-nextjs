import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RepoItem( {item}: any ) {
    return (
        <Card sx={{ marginBottom: 3 }} className="w-80" variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.full_name}
                </Typography>
                <Typography variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver mais</Button>
            </CardActions>
        </Card>
    )
};