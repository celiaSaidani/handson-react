/**
 * Created by celia on 16/06/17.
 */
import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.name=props.name;
    }
    render() {
        return(
            <tr>
                <td colSpan="2">{this.name}</td>
            </tr>
        );
    }

}
Header.PropTypes={
    name: PropTypes.string.required
}
export default Header;