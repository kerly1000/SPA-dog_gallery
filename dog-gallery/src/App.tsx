import { useEffect, useState } from "react";

type Dog = {
  id: number;
  name: string;
  image: string;
  liked: boolean;
};

function App() {
  const [dogs, setDogs] = useState<Dog[]>([
    { id: 1, name: "Floki", image: "/public/images/bullu.jpg", liked: false },
    { id: 2, name: "Juss", image: "/images/juss.jpg", liked: false },
    { id: 3, name: "Tibu", image: "/images/juss2.jpg", liked: false },
    { id: 4, name: "Tulnukas", image: "/images/bull1.jpg", liked: false },
    { id: 5, name: "Clown", image: "/images/bull2.webp", liked: false },
    { id: 6, name: "Alien", image: "/images/bull3.webp", liked: false },
    { id: 7, name: "Ploki", image: "/images/bull4.jpg", liked: false },
    { id: 8, name: "Troll", image: "/images/bull5.jpg", liked: false },
    { id: 9, name: "Draakon", image: "/images/bull6.jpg", liked: false },
    { id: 10, name: "Santa", image: "/images/dogo1.webp", liked: false },
    { id: 11, name: "Claus", image: "/images/dogo2.webp", liked: false },
    { id: 13, name: "Show White", image: "/images/dogo4.jpg", liked: false },
  ]);

  const [filter, setFilter] = useState<"all" | "liked">("all");

  const toggleLike = (id: number) => {
    setDogs(dogs.map(d =>
      d.id === id ? { ...d, liked: !d.liked } : d
    ));
  };

  const filteredDogs =
    filter === "liked"
      ? dogs.filter(d => d.liked)
      : dogs;

  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev => (prev + 1) % dogs.length);
  }, 3000);

  return () => clearInterval(interval);
}, [dogs.length]);    

return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Prettiest Breed Gallery</h1>

    {/* FILTER */}
    <div className="mb-4 flex gap-2">
      <button
        onClick={() => setFilter("all")}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Kõik
      </button>

      <button
        onClick={() => setFilter("liked")}
        className="px-4 py-2 bg-pink-200 rounded"
      >
        ❤️ Lemmikud
      </button>
    </div>

    {/* SLIDER */}
    <div className="overflow-hidden w-full h-[600px] max-w-4x1 mx-auto rounded-2xl shadow-lg">
  <div
    className="flex transition-transform duration-700"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >
    {dogs.map((dog) => (
      <img
        key={dog.id}
        src={dog.image}
        className="w-full h-[600px] object-cover flex-shrink-0"
      />
    ))}
  </div>
</div>
  </div>
);
}

export default App;
