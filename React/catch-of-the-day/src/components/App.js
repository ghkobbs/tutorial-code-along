import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadsamples = this.loadsamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);

        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //update state
        const fishes = {...this.state.fishes};
        //add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({fishes})
    }

    loadsamples() {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder(key) {
        //take a copy of our state
        const order = {...this.state.order};
        //update of add the new of fish ordered
        order[key] = order[key] + 1 || 1
        //update our state
        this.setState({order})
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadsamples={this.loadsamples} />
            </div>
        )
    }
}

export default App;