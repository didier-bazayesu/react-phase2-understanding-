import PropTypes from 'prop-types';
import React from 'react';

function Food(props) {
    return (
        <div>
            <ul>
                <li>Name: {props.names.name}</li>
                <li>Age: {props.age}</li>
                <li>isStudent: {props.isStudent ? "Yes" : "No"}</li>
                <hr />
            </ul>
        </div>
    );
}

Food.propTypes = {
    names: PropTypes.shape({
        name: PropTypes.string
    }),
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Food.defaultProps = {
    age: 102,
    isStudent: false,
    names: { name: "Guest" } // ⚡ important
};


export default Food;
