import Movie from "../components/Movie";
import {useEffect, useState} from 'react';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    // state가 api로 부터 데이터를 받아옴
    const json = await (
        await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
    ).json();
    setMovies(json.data.movies); //api로 받은 데이터로 state 변경
    setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
    // state로 받은 data로 표현
        <div>
        {loading ? (
            <h1>loading...</h1>
        ) : (
            <div>
            {movies.map((movie) => (
                <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                />
            ))}
            </div>
        )}
        </div>
    );
}

export default Home;