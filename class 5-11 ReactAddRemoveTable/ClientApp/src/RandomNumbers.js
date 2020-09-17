import React from 'react';
import AddRandomNumber from './AddRandomNumber';
import NumberRow from './NumberRow';

class RandomNumbers extends React.Component {
    state = {
        randomNumbers: [],
        addedNumbers: [],
        number: {
            randomNumber: 0,
            id: this.currentId,
            add: true
        }
    }      

    currentId = 0;

    onAddClick = () => {
        const number = { ...this.state.number };
        number.randomNumber = Math.floor(Math.random() * 10000) + 1
        this.currentId++;
        number.id = this.currentId;
        const randomNumbers = [...this.state.randomNumbers, number];
        this.setState({ randomNumbers });        
    }

    onAddList = number => {
        number.add = false;
        const addedNumbers = [...this.state.addedNumbers, number];
        this.setState({ addedNumbers });        
    }

    onRemoveList = number => {
        number.add = true;
        const addedNumbers = [...this.state.addedNumbers.filter(n => n.id !== number.id)];
        this.setState({ addedNumbers });
    }

    render() {
        return (
            <div className="well" style={{ marginTop: 60 }}>

                < AddRandomNumber onAddClick={this.onAddClick} />

                {console.log(this.state.randomNumbers)}

                {!!this.state.randomNumbers.length && <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.randomNumbers.map((number, i) =>
                            <NumberRow key={i} number={number}
                                onAddList={() => this.onAddList(number)}
                                onRemoveList={() => this.onRemoveList(number)}/>)}
                    </tbody>
                </table>}

                {!this.state.randomNumbers.length && <h1>Add Random Numbers</h1>}
                {!this.state.addedNumbers.length && <h1>No Added Numbers</h1>}

                {!!this.state.addedNumbers.length && <div><h1>Your Added Numbers</h1>
                    <ul>
                        {this.state.addedNumbers.map((n, i) => <li key={i}> {n.randomNumber} </li>)}
                    </ul></div>
                }
            </div>
        );
    }

}



export default RandomNumbers;