import React, {Component, PropTypes} from 'react';
import PokemonRow from './pokemon-row';
import classNames from 'classnames';


class PokemonTable extends Component {
    constructor(props) {
        super(props);
        this.selectPokemon=props.selectPokemon;
        this.pokemons=props.pokemons;
    }
    render() {
        let pkemonElm = [];
        this.pokemons.forEach( p =>{
            pkemonElm.push(<PokemonRow name={p.name} number={p.number}
                        selectPokemon={this.selectPokemon} selectedPokemonNumber={this.props.selectedPokemonNumber}/>
            );
        });
        return (
        <table className={classNames('table is-bordered')}>
            <tbody>
            {pkemonElm}
            </tbody>
        </table>    );



    }
}

PokemonTable.propTypes = {
    pokemons: PropTypes.array,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.object
};

export default PokemonTable;