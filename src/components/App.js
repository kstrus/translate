import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = {
        language: 'english'
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <i className="flag uk" style={{ cursor: 'pointer' }} onClick={() => this.setState({ language: 'english' })}/>
                    <i className="flag pl" style={{ cursor: 'pointer' }} onClick={() => this.setState({ language: 'polish' })}/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
