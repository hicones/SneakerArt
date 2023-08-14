import ShoesCard from "../ShoesCard";
import useFetchShoes from "../../infra/queries/getShoes";
import AddShoesModal from "../AddShoes";

const Home = () => {
  const { data } = useFetchShoes();

  return (
    <>
      <div className="w-full h-[24rem] mb-8 hero-bg flex flex-col justify-center md:px-16 px-8 gap-8">
        <h3 className="text-dark-40 text-5xl font-semibold">
          A melhor galeria de Sneakers
        </h3>
        <p className="text-dark-40 text-2xl font-medium max-w-xl">
          Conheça Sneakers autênticos. Os tênis Sneaker passaram de tendência
          para expressão cultural.
        </p>
      </div>

      <div className="w-full flex flex-col p-8 items-center">
        <h2 className="text-[2rem] font-semibold text-dark-10">Destaques</h2>
        <p className="font-medium text-dark-20 text-xl text-center">
          Frete grátis e brinde é aqui, aproveite por tempo limitado.
        </p>
      </div>

      <div className="motion max-w-6xl m-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-8 gap-x-5 px-2">
        {data?.map((shoes) => (
          <ShoesCard key={shoes.id} shoes={shoes} />
        ))}
        <AddShoesModal />
      </div>
    </>
  );
};
export default Home;
