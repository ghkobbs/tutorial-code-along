import React from 'react';
import AddFishForm from './addFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadsamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;