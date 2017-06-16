/**
 * Created by celia on 15/06/17.
 */
import  React from 'react';
class rows extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <tr>
                <td>this.props.Country</td>
                <td>this.props.Hello</td>
            </tr>
        );
    }
}export default rows;