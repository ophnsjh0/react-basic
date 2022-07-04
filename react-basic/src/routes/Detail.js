import {useState,  useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState([]);


    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setDetailMovie([json.data.movie]);   
        setLoading(false);
                   
    };
    console.log(detailMovie);
    useEffect(() => {
        getMovie();
    }, []);
    return(
        <div>
            {loading ? (<h1>Loding...</h1>) : (
                    <div>
                        <h3><Link to="/">Home</Link></h3>
                        {detailMovie.map((Movie) => (
                            <DetailMovie key={Movie.id}
                                id={Movie.id}
                                coverImg={Movie.medium_cover_image}
                                title={Movie.title_long}
                                detail={Movie.description_full}
                                genres={Movie.genres}
                            />
                        ))}
                    </div>
                )
            }   
        </div>       
    )
};

export default Detail