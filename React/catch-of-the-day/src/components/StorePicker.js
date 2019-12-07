import React from 'react';
import PropTypes from 'prop-types'
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event) {
        event.preventDefault();

        //first grab the text from the box
        const storeId = this.storeInput.value;

        //Second we're going to transition from / to /store/:storeid
        // this.context.value.router.transitionTo(`/store/${storeId}`);
        this.props.history.push(`/store/${storeId}`)
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

const MyContext = React.createContext({router: PropTypes.object});
StorePicker.contextType = MyContext


export default StorePicker;