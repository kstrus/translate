import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderButton = color => {
        const buttonClass = color === 'red' ? 'red' : 'primary';

        return (
            <button className={`ui button ${buttonClass}`} type="submit">
                <LanguageContext.Consumer>
                    {value => value === 'english' ? 'Submit' : 'Zapisz'}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;

// We use Consumer approach instead of this.context
// in case when we need to get information out of multiple
// different context objects inside of a single component
