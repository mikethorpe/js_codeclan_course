import React, {Component} from 'react';
import FilmList from './FilmList';
import GetShowTimes from '../components/GetShowTimes';

class OpeningFilmsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                { title: "Bladerunner", showTimeLink: "www.mikethorpe.co.uk"},
                { title: "Toy Story 3", showTimeLink: "www.mikethorpe.co.uk"},
                { title: "Drive", showTimeLink: "www.mikethorpe.co.uk"},
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h4>{this.props.title}</h4>
                <FilmList films={this.state.films}/>
                <p><a href="www.mikethorpe.co.uk">See more opening this week >></a></p>
                <GetShowTimes/>
            </React.Fragment>
        )
    }
}

export default OpeningFilmsBox;