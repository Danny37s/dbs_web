import { I_DataSample } from "@/models";
import { I_filterData } from "./../models/filterDataInput";
import axiosClient from "./axiosClient";
export const dataSampleApi = {
  async getListData(search?: string, sort?: string) {
    let url: string = "/data-sample/data";
    if (search || sort) {
      url = `/data-sample/data?search=${search}&sort=${sort}`;
    }
    try {
      const response = await axiosClient.get<{},I_DataSample[]>(url);
      const data: I_DataSample[] = response;
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
