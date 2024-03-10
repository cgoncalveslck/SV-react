import * as React from "react";

export default function PokemonCard({ pokemon }) {
  const capitalize = (str) => {
    if (!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getRandomShapeX = () => {
    // The image is 220 x 1980 split into 9 shapes,
    // this is meant to give me a random shape along the x axis
    const incr = 220;
    const randomInt = Math.floor(Math.random() * 9) + 1;
    return incr * randomInt * -1 + incr;
  };

  React.useEffect(() => {
    if (pokemon) return;

    const interval = setInterval(() => {
      setBackgroundPositionX(getRandomShapeX());
    }, 100);

    return () => clearInterval(interval);
  });

  const [backgroundPositionX, setBackgroundPositionX] = React.useState(0);

  return (
    <div>
      <div className="bg-primary text-primary-foreground rounded-md border-500 border-2 p-2">
        <div>
          <h2>{capitalize(pokemon?.name) || "Your pokemon"}</h2>

          <div className="bg-white">
            {pokemon ? (
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon?.name}
                style={{
                  width: "220px",
                  height: "220px",
                  border: "2px solid rgba(0, 0, 0, 0.1)",
                }}
              />
            ) : (
              <span
                className="pokemon-image"
                style={{
                  height: "220px",
                  width: "220px",
                  display: "block",
                  backgroundPositionX,
                }}
              ></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
