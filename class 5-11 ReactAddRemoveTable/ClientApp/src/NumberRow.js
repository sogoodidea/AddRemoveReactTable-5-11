import React from 'react';

class NumberRow extends React.Component {

    render() {
        const { onAddList, onRemoveList } = this.props;
        return (
            <tr>
                <td>{this.props.number.randomNumber}</td>

                {!!this.props.number.add && <td><button className="btn btn-danger"
                    onClick={onAddList}
                >Add to List</button></td>}

                {!this.props.number.add && <td><button className="btn btn-danger"
                    onClick={onRemoveList}
                >Remove from List</button></td>}
                
            </tr>
            );
    }

}

export default NumberRow;