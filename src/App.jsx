import {useEffect,useState,useContext} from "react";
import {collection,getDocs} from "firebase/firestore";
import { db } from "./firebase";
import EventCard from "./components/EventCard";
import {AuthContext} from "./context/AuthContext";

function App() {

  const [events, setEvents] = useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedId, setSelectedId] =
    useState(
      localStorage.getItem(
        "selectedEvent"
      )
    );

  const {
    isLoading,
    setIsLoading
  } = useContext(AuthContext);

  useEffect(() => {

    const fetchEvents = async () => {

      setIsLoading(true);

      const snapshot =
        await getDocs(
          collection(db, "events")
        );

      const data =
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

      setEvents(data);

      setIsLoading(false);
    };

    fetchEvents();

  }, []);

  const filteredEvents =
    events.filter(event =>
      event.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const handleClick = (id) => {

    setSelectedId(id);

    localStorage.setItem(
      "selectedEvent",
      id
    );
  };

  return (
    <div className="dashboard">

      <h1>Event Dashboard</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {isLoading ? (

        <div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>

      ) : (

        <div className="grid">

          {filteredEvents.map(event => (

            <EventCard
              key={event.id}
              event={event}
              selected={
                selectedId === event.id
              }
              onClick={() =>
                handleClick(event.id)
              }
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default App;