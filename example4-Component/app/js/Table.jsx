/**
 * Created by celia on 15/06/17.
 */
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.hellowords=props.hellowords
    }
    render() {
        let previousRegion;
        const rows=[];

        return(
            <table>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Hello</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <!--region header-->
                </tr>
                <tr>
                    <!--country and hello-->
                </tr>
                </tbody>
            </table>
        )
    }

}export default Table;