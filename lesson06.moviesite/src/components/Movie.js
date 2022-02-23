import PropsTypes from 'prop-types'; //djEjs props를 가지고 있냐
import { Link }from 'react-router-dom';
function Movie({id, coverImg, title, summary,genres}){ //componenet 부터 이런 property를 받아온다(props object)
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>
            <Link to ={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g)=>(
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
}
Movie.PropsTypes = {
    id: PropsTypes.number.isRequired,
    coverImg:PropsTypes.string.isRequired,
    title : PropsTypes.string.isRequired,
    summmary :PropsTypes.string.isRequired,
    genres : PropsTypes.arrayOf(PropsTypes.string)
}

//리액트 라우터 => 화면 전환
export default Movie;