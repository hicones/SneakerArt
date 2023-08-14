import * as yup from "yup";

export const addShoesSchema = yup.object().shape({
  name: yup.string().trim().required("Insira o nome"),
  price: yup.number().required("Insira o preço"),
  image: yup
    .string()
    .trim()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Insira uma url válida"
    )
    .required("Insira a url da imagem"),
  description: yup.string().trim().required("Insira a descrição"),
  brand: yup.string().trim().required("Insira a marca"),
});
