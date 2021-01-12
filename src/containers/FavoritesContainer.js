import React, { Component } from "react";
import ImageMed from "../components/ImageMed";
import appState from "../appState";
import { Link } from "react-router-dom";

class FavoritesContainer extends Component {
    state = {
        favorites: appState.favorites,
    };

    render() {
        return (
            <div className="container">
                <h2>Favorites!</h2>
                {this.state.favorites.map((imgURL, index) => {
                    return (
                        <>
                            <ImageMed
                                key={index}
                                url={imgURL}
                                altText={`a ${this.state.selectedBreed}`}
                            />
                        </>
                    );
                })}
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}

export default FavoritesContainer;
