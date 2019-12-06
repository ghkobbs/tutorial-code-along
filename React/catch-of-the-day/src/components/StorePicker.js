import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event) {
        event.preventDefault();

        console.log(this.storeInput.value)
        //first grab the text from the box
        
        //Second we're going to transition from / to /store/:storeid
    }
    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e) }>
                <h2>Please Enter A Store</h2>
                <input type="text" name="" id="" placeholder="Store Name" required defaultValue={getFunName()} ref={(input) => {this.storeInput = input} } />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;