/**
 * Created by celia on 15/06/17.
 */
import  React from 'react';
import PropTypes from 'prop-types';
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.country=props.country;
        this.hello=props.hello;
    }
    render() {
        return(
            <tr>
                <td>{this.country}</td>
                <td>{this.hello}</td>
            </tr>
        );
    }
}
Row.PropTypes={
    contury: PropTypes.string.required,
    hello: PropTypes.string.required
}
export default Row;