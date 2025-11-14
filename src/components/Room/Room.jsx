import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button, IconButton } from '@mui/material';
import { AttachMoney, Group, LocalHotel } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function Room({room}) {
    const navigate = useNavigate();

    const handleBook = (bedType) => {
        navigate('/book/'+ bedType)
    }

    return (
        <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {room.avatar}
                    </Avatar>
                }
                title={room.title}
            />
            <CardMedia
                component="img"
                height="194"
                image={`/src/assets/images/${room.bedType}.png`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {room.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <LocalHotel />: {room.bed}
                </IconButton>
                <IconButton>
                <Group />: {room.capacity}
                </IconButton>
                <IconButton>
                <AttachMoney />: {room.price}
                </IconButton>
                <Button onClick={()=>handleBook(room.bedType)} variant='contained' color='primary'>
                    Book
                </Button>
            </CardActions>
        </Card>
    );
}
