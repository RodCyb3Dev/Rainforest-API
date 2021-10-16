import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
// style
import { Container } from "@chakra-ui/react";

import ProductsList from "./components/Products/ProductsList";
import HeaderSection from "./components/HeaderSection";

export default function App() {
  return (
    <Router>
      <Container maxW={"7xl"} p="12">
        <HeaderSection />
        <Route path="/" component={ProductsList} />
      </Container>
    </Router>
  );
}
