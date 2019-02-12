import React from 'react';
import PropTypes from 'prop-types';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div style={{ marginBottom: '15px' }}>
                <i className="flag uk" style={{ cursor: 'pointer' }} onClick={() => this.props.onLanguageChange('english')}/>
                <i className="flag pl" style={{ cursor: 'pointer' }} onClick={() => this.props.onLanguageChange('polish')}/>
            </div>
        );
    }
}

LanguageSelector.propTypes = {
    onLanguageChange: PropTypes.func
};

export default LanguageSelector;
