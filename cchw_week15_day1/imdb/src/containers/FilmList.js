import React, {Component} from 'react';
import Film from '../components/Film';

class FilmList extends Component {
    render() {
        const filmNodes =  this.props.films.map ((film, index) => {
            return (
                <Film title={film.title} showTimeLink={film.showTimeLink} key={index}/>
            )
        });

        return (
            <div className='film-list'>{filmNodes}</div>
        )
    }
}

export default FilmList;