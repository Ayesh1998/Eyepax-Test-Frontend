import Carousel from "./components/Carousel/Carousel";

function App() {
    return (
        <div className="App">
            <Carousel slides="1" infinite={false}/>
            <Carousel slides="4" infinite={true}/>
            <Carousel slides="5" infinite={false}/>
        </div>
    );
}

export default App;
