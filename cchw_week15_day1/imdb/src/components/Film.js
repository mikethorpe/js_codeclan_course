import React, {Component} from 'react';

class Film extends Component {
    render() {

        return (
            <React.Fragment>
                <h5>{this.props.title} <a href={this.props.showTimeLink}>ShowTimes</a></h5>
            </React.Fragment>
        );
    }
}

export default Film;