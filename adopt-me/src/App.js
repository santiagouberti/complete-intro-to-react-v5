const Pet = ({ name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        { id: "algo-importante"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { 
                name: "Fortunato",
                animal: "Tortuga",
                breed: "Terrestre" 
            }),
            React.createElement(Pet, { 
                name: "Alaska",
                animal: "Perro",
                breed: "Mixto" 
            }),
            React.createElement(Pet, { 
                name: "Crackovia", 
                animal: "Perro", 
                breed: "Dálmata" 
            })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
