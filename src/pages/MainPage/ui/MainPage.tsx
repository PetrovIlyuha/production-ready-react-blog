import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

function MainPage() {
    return (
        <div>
            <h2>Main Page</h2>
            <Button theme={ButtonTheme.OUTLINED}>Click Me</Button>
        </div>
    );
}

export default MainPage;
