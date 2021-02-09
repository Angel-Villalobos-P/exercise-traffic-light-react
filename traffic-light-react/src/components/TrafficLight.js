import { useState } from 'react';
import "../styles/trafficLight.scss";

const TrafficLight = () => {
    const [selectedLight, setLight] = useState('');

    return (
        <div>
            <div id="trafficTop"></div>
            <div id="boxLights">
                <div className={"red light " + (selectedLight === 'red' ? 'selected' : '')} onClick={() => setLight('red')}></div>
                <div className={"yellow light " + (selectedLight === 'yellow' ? 'selected' : '')} onClick={() => setLight('yellow')}></div>
                <div className={"green light " + (selectedLight === 'green' ? 'selected' : '')} onClick={() => setLight('green')}></div>
            </div>
        </div>
    );
}

export default TrafficLight;