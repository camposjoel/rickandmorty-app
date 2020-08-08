import React from 'react';
import Card from './Card';
import '../index.css';

class CardList extends React.Component {
    state = {
        isLoading: false,
        page: 1,
        data: {
            results: []
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({
            isLoading: true
        });

        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`);
        const data = await response.json();

        this.setState({
            isLoading: false,
            page: this.state.page + 1,
            data: {
                results: this.state.data.results.concat(data.results)
            }
        })
    }



    render() {
        return (
            <>
            <div className="px-4 py-4">
                {this.state.data.results.map(character => (
                    <div className="column is-one-quarter is-inline-block" key={character.id}>
                        <Card character={character}/>
                    </div>
                ))}
            </div>
            {!this.state.isLoading && (
                <div className="px-4 pb-6 centrar">
                    <button className="button is-primary" onClick={this.fetchCharacters}>Load more</button>
                </div>
            )}
            </>
        );
    }
}

export default CardList;