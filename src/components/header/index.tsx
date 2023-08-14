const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="bg-primary p-4 w-full text-center">
        <span className="font-medium text-base text-dark-10">
          Ganhe R$ 10,00 de desconto no frete
        </span>
      </div>
      <div className="w-full text-center p-4">
        <a href="/">
          <h1 className="text-gray-10 font-semibold text-2xl">ShoesStore</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
