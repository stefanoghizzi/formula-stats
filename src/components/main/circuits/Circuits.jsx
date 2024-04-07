import './Circuit.css';
import circuitsData from '../../../data/circuits.json';

function Circuit() {
    return (
        <>
            {circuitsData.circuits.map((circuit, index) => (
                <div
                    key={index}
                    className="circuit dflex-fdc-aic m-m pt-m pr-s pb-m pl-s exo-extrabold color-white"
                >
                    <span className="circuit-state font-m m-m">{`${circuit.state} grand prix`}</span>
                    <span className="circuit-name font-s">{circuit.name}</span>
                    <img
                        src={circuit.flag}
                        alt={`${circuit.state} flag`}
                        className="circuit-flag m-m"
                    />
                    <img
                        src={circuit.image}
                        alt={`${circuit.name} track`}
                        className="circuit-image"
                    />
                    <div className="dflex">
                        <div className="circuit-lenght dflex-fdc-aic m-m">
                            <span className="font-s">lenght</span>
                            <span className="font-s">{`${circuit.lenght} km`}</span>
                        </div>
                        <div className="circuit-laps dflex-fdc-aic m-m">
                            <span className="font-s">laps</span>
                            <span className="font-s">{circuit.laps}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Circuit;
