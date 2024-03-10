import * as React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useToast } from "../components/ui/use-toast";
import PokemonCard from "../components/PokemonCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Layout() {
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [allPokemon, setAllPokemon] = React.useState([]);
  const [currentPokemonIndex, setCurrentPokemonIndex] = React.useState(null);

  const { toast } = useToast();

  const getPokemon = (id: string | number) => {
    if (typeof id === "string") id.toLowerCase();

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setCurrentPokemonIndex(allPokemon.length);
        setAllPokemon([...allPokemon, res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast({
            variant: "destructive",
            title: "That Pokemon doesn't exist!",
            description: "Make sure you spelled it correctly!",
          });
        }
        setIsLoading(false);
        setSearch("");
      });
  };

  const previousPokemon = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    }
  };

  const nextPokemon = () => {
    if (currentPokemonIndex < allPokemon.length - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    } else {
      const nextId = allPokemon[currentPokemonIndex].id + 1;

      getPokemon(nextId);
    }
  };

  const handleSearchSubmit = () => {
    if (!search) return;

    setIsLoading(true);
    getPokemon(search);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-bold text-primary">Find your Pokemon!</h1>
        <div className="flex flex-row justify-items-center gap-5">
          <Input
            type="search"
            placeholder="Search for a Pokemon..."
            className="dark"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button variant="outline" type="submit" onClick={handleSearchSubmit}>
            <span className="flex flex-row justify-between gap-2">
              <p>{isLoading ? "Searching" : "Search"}</p>
            </span>
          </Button>
        </div>
      </div>
      <div className="pokemon-card">
        {<PokemonCard pokemon={allPokemon[currentPokemonIndex]} />}
      </div>
      <div className="flex flex-row w-1/2 justify-between">
        <Button onClick={previousPokemon} variant="outline" size="icon">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>

        <Button onClick={nextPokemon} variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
