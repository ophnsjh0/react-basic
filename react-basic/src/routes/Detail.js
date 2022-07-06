import {useState,  useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import styles from "./Home.module.css";

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
        <div className={styles.container}>
            
            {loading ? (<div className={styles.loader}> <span>Loading...</span></div>) : (            
                <div className={styles.movies}>
                        
                        {detailMovie.map((Movie) => (
                            <DetailMovie key={Movie.id}
                                id={Movie.id}
                                year={Movie.year}
                                coverImg={Movie.medium_cover_image}
                                title={Movie.title_long}
                                detail={Movie.description_full}
                                genres={Movie.genres}
                            />
                        ))}
                    </div>
                )
            }             
           
        <h4 className={styles.home}><Link to="/">Home</Link></h4> 
        </div>
    )
};

export default Detail