import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import ContactUs from "./components/ContactUs";
import MeasureYourSpace from "./components/ContactusComponents/MeasureYourSpace";
import "./App.css";
import Homepage from "./components/Homepage";
// GraphQL client setup
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Select a Page</h1>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 mb-6">
            <Link to="/measure">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Measure Your Space
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/measure" element={<MeasureYourSpace />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
