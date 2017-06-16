import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class PokemonRow extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.number = props.number;
        this.selectPokemon = props.selectPokemon;
        this.call=this.call.bind(this);
    }
    call() {
        this.selectPokemon(this.number);
    }
    render() {
        return(
            <tr>
                <td onClick={this.call}>
                    <p className={classNames('notification'
                        ,{'is-success': this.number===this.props.selectedPokemonNumber})}>
                        {this.number} {this.name}
                    </p>
                </td>
            </tr>

        );

    }
}

PokemonRow.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonRow;
