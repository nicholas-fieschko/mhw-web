import React, { Component } from 'react';

export default class WeaknessRating extends Component {
    render() {
        if (!this.props) return null;
    
        const { elementName, starCount, style } = this.props;
        const stars = Array(starCount).fill("+").join('');
    
        return (
            <span {...this.props}>
                {`${elementName}: ${stars}`}
            </span>
        );
    }
}
