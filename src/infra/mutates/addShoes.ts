import { useMutation } from "react-query";
import { AddShoes } from "../../types";
import { api } from "../../services/api";
import Swal from "sweetalert2";

async function addShoes(data: AddShoes) {
  try {
    const response = await api.post(`/shoes`, data);
    if (response) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Snicker adicionado!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export default function useAddShoes() {
  return useMutation(addShoes);
}
