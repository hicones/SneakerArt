import Footer from "./components/footer";
import Header from "./components/header";

type props = {
  children: React.ReactNode;
};

function App({ children }: props) {
  return (
    <main className="w-full  min-h-screen flex flex-col">
      <Header />
      <section className="section">{children}</section>
      <Footer />
    </main>
  );
}

export default App;
