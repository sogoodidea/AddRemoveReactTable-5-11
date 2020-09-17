import React from 'react';

class AddRandomNumber extends React.Component {
    render() {
        const { onAddClick } = this.props;
        return (
            <div>
                <button className="btn btn-primary btn-block"
                    onClick={onAddClick}>
                    Add Random Number</button>
            </div>
        );
    }
}

export default AddRandomNumber;



