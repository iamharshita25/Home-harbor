import { Link } from 'react-router-dom';
import './1.scss';

function ListProfile({ item }) {
    return (
        <div className="card">
            <Link to={`/${item._id}`} className='imageContainer'>
                <img src={item.imageUrls[0]} alt={item.name} />
            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item._id}`}>{item.name}</Link>
                </h2>
                <p className='address'>
                    <img src="src/component/card/gg--pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className='price'>₹{item.regularPrice}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="src/component/card/material-symbols-light--bedroom-parent-outline-sharp.png" alt="" />
                            <span>{item.bedrooms} Bedrooms</span>
                        </div>
                        <div className="feature">
                            <img src="src/component/card/cil--bathroom.png" alt="" />
                            <span>{item.bathrooms} Bathrooms</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                        <Link to="/Updatedetails" className='Updatedetails'><button>Update Details</button></Link>
                            
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProfile;
