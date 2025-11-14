import { Link, useParams } from 'react-router';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's Book a {bedType} Room</h1>
            <p>Want a <Link to='/'>different room</Link></p>
        </div>
    );
};

export default Book;