import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Imię';

        return (
            <div className="field">
                <label>{text}</label>
                <input type="text" name="name"/>
            </div>
        );
    }
}

export default Field;
