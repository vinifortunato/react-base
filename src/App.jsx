import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <p>Hello!</p>
        <Footer />
      </div>
    </>
  );
}

export default App;
