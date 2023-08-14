/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

type Props = {
  shoes?: {
    name: string;
    image: string;
    price?: number;
    description?: string;
    img?: any;
    brand?: string;
  };
  onClick?: () => void;
};

const ShoesCard = ({ shoes, onClick }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className="w-full flex p-2 h-60 rounded overflow-hidden bg-dark-30 cursor-pointer hover:brightness-90 transition items-center"
          onClick={onClick}
        >
          <img
            src={shoes?.image}
            alt="shoes"
            className="hover:-translate-y-2 transition"
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow h-full fixed top-1/2 left-1/2 max-h-[85vh] w-full md:max-w-[80vw] max-w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white md:p-7 overflow-scroll">
          <div className="flex w-full h-full overflow-scroll items-center my-auto flex-col md:flex-row">
            <div className="flex w-full md:w-2/3 h-full items-center justify-center">
              <img src={shoes?.image} alt="shoesImage" className="" />
            </div>
            <div className="md:w-1/3 w-full md:h-full flex flex-col px-2 justify-center gap-4 pb-4 md:pb-0">
              <h2 className="font-semibold text-dark-10 text-3xl">
                {shoes?.name}
              </h2>
              <div>
                <span className="rounded-full py-1 px-4 font-medium text-center border border-primary">
                  {shoes?.brand}
                </span>
              </div>
              <span className="text-primary font-semibold text-lg">
                $ {shoes?.price}
              </span>
              <p className="mt-4 text-dark-20 font-medium text-base">
                {shoes?.description}
              </p>
              <button
                disabled
                className="disabled:cursor-not-allowed w-full bg-primary p-2 rounded text-white font-semibold hover:brightness-75 transition"
              >
                Comprar
              </button>
            </div>
          </div>
          <Dialog.Close asChild className="hover:opacity-70 transition">
            <button
              className="text-gray-40 absolute top-[10px] right-[10px] h-7 w-7 flex items-center justify-center"
              aria-label="Close"
            >
              <IoClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ShoesCard;
