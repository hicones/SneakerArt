import { QueryFunctionContext, useQuery } from "react-query";
import { api } from "../../services/api";
import { Shoes } from "../../types";

interface ShoesResponse {
  Dev_shoes: Shoes[];
}

async function getShoes(ctx: QueryFunctionContext) {
  const [,] = ctx.queryKey;

  const { data } = await api.get<ShoesResponse>(`/shoes`);
  return data.Dev_shoes;
}

export default function useFetchShoes() {
  return useQuery(["shoesList"], getShoes, {
    keepPreviousData: true,
  });
}
