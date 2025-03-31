import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AddEvents from "../pages/AddEvents";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import EventDetails from "../pages/EventDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-events" element={<AddEvents />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
