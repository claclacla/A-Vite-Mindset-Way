import React, { useState } from 'react'
import { Button } from '@/components/ui/button';

function App() {
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <div title="main-form">
            <Button title='click-button' className="text-red-800" onClick={() => setButtonClicked(true)}>
                Click Me
            </Button>

            {buttonClicked && <div title="button-clicked">Clicked!</div>}
        </div>
    );
}

export default App
