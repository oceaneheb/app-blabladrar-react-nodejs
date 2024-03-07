import React from 'react';
import Checkbox from './Checkbox';
// import './CheckboxGroup.css'


class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckbox : 'Trajet quotidien', //case cochée par défaut
        };
    };

    handleCheckboxChange = (event) => {
        this.setState ({
            selectedCheckbox: event.target.value,
        });
    };

    render() { //générer le rendu du composant
        const options = ['Trajet quotidien', 'Trajet ponctuel', 'Evénement'];

        return (
            <div>
                <h3>Type de trajet</h3>
                <div id='type-trajet'>
                    {options.map((option) => (
                        <Checkbox 
                            label={option}
                            value={option}
                            onCheckboxChange={this.handleCheckboxChange}
                            isSelected={this.state.selectedCheckbox === option}
                            key={option}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CheckboxGroup;