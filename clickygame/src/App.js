import React from "react";
import Game from "./components/Game";


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function App() {
    return <Game />;
}

export default App;
