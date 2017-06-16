import React, {Component, PropTypes} from 'react';

class PokemonInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let childrens = [];
        React.Children.forEach(this.props.children,(e,index) => {
            if (index !== 0) {
                childrens.push(<hr/>);
            }
            childrens.push(e);
        }); return (
                <div className="box">{childrens}
                </div>);

    }
}
PokemonInformation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default PokemonInformation;
