import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DetailMovie ({id, coverImg, title, detail, genres}) {
    return(
        <div>
            <img src={coverImg} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{detail}</p>
            <ul>
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
};

DetailMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    titel: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default DetailMovie;
