
// src/app/page.tsx

import Header from './components/Header'; // Import the Header component
import Upper from './components/Upper'; // Import the Upper component
import Middle from './components/Middle'; // Import the Middle component
import Lower from './components/Lower'; // Import the Lower component
import './globals.css'; // Import global styles

export default function HomePage() {
    return (
        <main>
            <Header />
            <Upper />
            <Middle />
            <Lower />
        </main>
    );
}
