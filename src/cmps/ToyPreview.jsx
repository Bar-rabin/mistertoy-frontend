import { Link } from "react-router-dom";

export function ToyPreview({ toy }) {

    return (
        <article>
            <h4>{toy.name}</h4>
            <h1>⛐</h1>
            <p>Price: <span>${toy.price.toLocaleString()}</span></p>
            {/* {car.owner && <p>Owner: <Link to={`/user/${car.owner._id}`}>{car.owner.fullname}</Link></p>} */}
            <hr />
            <Link to={`/toy/edit/${toy._id}`}>Edit</Link> &nbsp; | &nbsp;
            <Link to={`/toy/${toy._id}`}>Details</Link>


        </article>
    )
}