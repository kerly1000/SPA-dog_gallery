import { useEffect, useState } from "react";

type Dog = {
  id: number;
  name: string;
  image: string;
  liked: boolean;
};

function App() {
  const [dogs, setDogs] = useState<Dog[]>([
    { id: 1, name: "Floki", image: "images/bullu.jpg", liked: false },
    { id: 2, name: "Juss", image: "images/juss.jpg", liked: false },
    { id: 3, name: "Tibu", image: "images/juss2.jpg", liked: false },
    { id: 4, name: "Tulnukas", image: "images/bull1.jpg", liked: false },
    { id: 5, name: "Clown", image: "images/bull2.webp", liked: false },
    { id: 6, name: "Alien", image: "images/bull3.webp", liked: false },
    { id: 7, name: "Ploki", image: "images/bull4.jpg", liked: false },
    { id: 8, name: "Troll", image: "images/bull5.jpg", liked: false },
    { id: 9, name: "Draakon", image: "images/bull6.jpg", liked: false },
    { id: 10, name: "Santa", image: "images/dogo1.webp", liked: false },
    { id: 11, name: "Claus", image: "images/dogo2.webp", liked: false },
    { id: 12, name: "Snow White", image: "images/juss4.jpg", liked: false },
    { id: 13, name: "Show White", image: "images/dogo4.jpg", liked: false },
  ]);

  const [filter, setFilter] = useState<"all" | "liked">("all");

  const toggleLike = (id: number) => {
    setDogs(dogs.map(d =>
      d.id === id ? { ...d, liked: !d.liked } : d
    ));
  };

  const [darkMode, setDarkMode] = useState(false);

  const filteredDogs =
    filter === "liked"
      ? dogs.filter(d => d.liked)
      : dogs;

  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev =>
      filteredDogs.length === 0
        ? 0
        : (prev + 1) % filteredDogs.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, [filteredDogs.length]);  

return (
<div className={`
  min-h-screen p-8 transition-colors duration-500
  ${darkMode 
    ? "bg-neutral-900 text-gray-200" 
    : "bg-gray-100 text-gray-800"}
`}>
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Prettiest Breed Gallery
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-xl transition ${
          darkMode 
            ? "bg-gray-700 hover:bg-gray-600" 
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>

    {/* FILTER */}
    <div className="mb-6 flex gap-3">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-xl transition ${
          filter === "all"
            ? "bg-blue-500 text-white"
            : darkMode
            ? "bg-gray-700"
            : "bg-gray-200"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("liked")}
        className={`px-4 py-2 rounded-xl transition ${
          filter === "liked"
            ? "bg-pink-500 text-white"
            : darkMode
            ? "bg-gray-700"
            : "bg-pink-200"
        }`}
      >
        ❤️ Favorites
      </button>
    </div>

    {/* SLIDER */}
<div className="overflow-hidden w-full h-[600px] max-w-4x1 mx-auto rounded-2xl shadow-lg">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >
    {filteredDogs.map((dog) => (
  <div key={dog.id} className="relative w-full h-[600px] flex-shrink-0 
    ">
    
    <img
      src={dog.image}
      className="w-full h-[600px] object-cover transition-opacity duration-700"
    />

    {/* ❤️ LIKE BUTTON */}
    <button
      onClick={() => toggleLike(dog.id)}
      className="absolute top-4 right-4 text-2xl bg-white/80 backdrop-blur px-3 py-1 rounded-full 
              hover:scale-110 transition shadow"
    >
      {dog.liked ? "❤️" : "🤍"}
    </button>

  </div>
))}
  </div>
</div>

  </div>
);
}

export default App;
