import React, { Component } from "react";
import Select from "../components/Select";
import ImageMed from "../components/ImageMed";
import appState from "../appState";
import { Link } from "react-router-dom";

class DogContainer extends Component {
    state = {
        breeds: [],
        images: [],
        selectedBreed: "",
    };

    componentDidMount() {
        //https://dog.ceo/api/breeds/list/all
        const fetchBreeds = () => {
            fetch("https://dog.ceo/api/breeds/list/all")
                .then((res) => res.json())
                .then((data) => {
                    const breeds = Object.keys(data.message);
                    this.setState({ breeds });
                });
        };
        setTimeout(fetchBreeds, 2000);
    }

    handleBreedSelect = (event) => {
        const selectedBreed = event.target.value;
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
            .then((res) => res.json())
            .then((data) => {
                const images = data.message.slice(0, 10);
                this.setState({ selectedBreed, images });
            });
    };

    handleAddFavorite = (url) => {
        appState.favorites.push(url);
        console.log(appState);
    };

    handleRemoveImage = (imgURL) => {
        const filteredArray = this.state.images.filter((url) => url !== imgURL);
        this.setState({
            images: filteredArray,
        });
    };

    renderResults = () => {
        return (
            <>
                <h2>{this.state.selectedBreed}</h2>
                {this.state.images.map((imgURL, index) => {
                    return (
                        <>
                            <ImageMed
                                key={index}
                                url={imgURL}
                                altText={`a ${this.state.selectedBreed}`}
                            />
                            <button
                                onClick={() => this.handleAddFavorite(imgURL)}
                            >
                                Favorite
                            </button>
                            <button
                                onClick={() => this.handleRemoveImage(imgURL)}
                            >
                                Remove
                            </button>
                        </>
                    );
                })}
            </>
        );
    };

    render() {
        return (
            <div className="container">
                <Link to={"/favorites"}>My Favorites</Link>
                {this.state.breeds.length > 0 ? (
                    <Select
                        options={this.state.breeds}
                        handleOnChange={this.handleBreedSelect}
                    />
                ) : (
                    <h3>...fetching list</h3>
                )}
                {this.state.selectedBreed && this.renderResults()}
            </div>
        );
    }
}

export default DogContainer;
