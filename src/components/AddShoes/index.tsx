import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { TbLayoutGridAdd } from "react-icons/tb";
import { AddShoes } from "../../types";
import { addShoesSchema } from "../lib/yup/schemas";
import useAddShoes from "../../infra/mutates/addShoes";
import { useQueryClient } from "react-query";
import { useState } from "react";

const AddShoesModal = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddShoes();
  const [open, setOpen] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<AddShoes>({
    resolver: yupResolver(addShoesSchema),
  });

  const closeModal = () => {
    clearErrors();
    setOpen(false);
  };

  const onSubmit = (data: AddShoes) => {
    mutateAsync(data).then(() => {
      queryClient.invalidateQueries(["shoesList"]);
      closeModal();
    });
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild onClick={() => setOpen(true)}>
        <div className="w-full flex justify-center p-2 h-60 rounded bg-dark-30 cursor-pointer hover:brightness-90 transition items-center">
          <TbLayoutGridAdd className="w-1/2 h-1/2 text-primary" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={closeModal}
          className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-auto w-full lg:max-w-[70vw] xl:max-w-[40vw] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-7">
          <h2 className="font-semibold text-2xl text-dark-10">
            Adicionar Snicker
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full items-start gap-8 h-full flex-col pt-10"
          >
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="name" className="text-dark-10 font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="inputStyle"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm text-medium">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="brand" className="text-dark-10 font-medium">
                Marca
              </label>
              <input
                type="text"
                id="brand"
                className="inputStyle"
                {...register("brand")}
              />
              {errors.brand && (
                <span className="text-red-500 text-sm text-medium">
                  {errors.brand.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="price" className="text-dark-10 font-medium">
                Preço
              </label>
              <input
                type="number"
                id="price"
                step={0.01}
                className="inputStyle"
                onChange={(e) => setValue("price", Number(e.target.value))}
              />
              {errors.price && (
                <span className="text-red-500 text-sm text-medium">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="image" className="text-dark-10 font-medium">
                Url da Imagem
              </label>
              <input
                type="url"
                id="image"
                className="inputStyle"
                {...register("image")}
              />
              {errors.image && (
                <span className="text-red-500 text-sm text-medium">
                  {errors.image.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="description" className="text-dark-10 font-medium">
                Descrição
              </label>
              <textarea
                id="description"
                className="inputStyle"
                {...register("description")}
              />
              {errors.description && (
                <span className="text-red-500 text-sm text-medium">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="w-full flex gap-4 items-center justify-end">
              <Dialog.Close onClick={closeModal}>
                <span className="cancelButton">Cancelar</span>
              </Dialog.Close>
              <button className="button">Enviar</button>
            </div>
          </form>
          <Dialog.Close
            onClick={closeModal}
            asChild
            className="hover:opacity-70 transition"
          >
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

export default AddShoesModal;
