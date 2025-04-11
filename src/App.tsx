import React, { useState } from 'react';

import ComponentRenderer from './components/ComponentRenderer';

function App() {
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <div title="container">
            {<ComponentRenderer type="button" props={{ label: "Click me", onClick: () => setButtonClicked(true) }} />}
            {buttonClicked && <div>Clicked!</div>}
        </div>
    );
}

export default App;
