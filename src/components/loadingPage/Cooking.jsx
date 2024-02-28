import React from "react";
import "./styles.css";

const Cooking = () => {
    return (
        <div id="lodadingContainer">
            <div id="cooking">
                <h1>Cooking in progress..</h1>
                <div id="area">
                    <div id="sides">
                        <div id="handle" />
                        <div id="pan" />
                    </div>
                    <div id="pancake">
                        <div id="pastry" />
                    </div>
                </div>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="bubble" />
                ))}
            </div>
        </div>
    );
};

export default Cooking;
