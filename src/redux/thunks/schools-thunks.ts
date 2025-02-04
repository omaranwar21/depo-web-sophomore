import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Endpoints from "../axios/endpoints";

export const getSchools = createAsyncThunk(
  "schools/get",
  async (_data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get(Endpoints.host);
      console.log(response, "response");
      return response.data?.data;
    } catch (error) {
      console.log("Error:", error);
      const errorResponse = "Cant fetch schools";
      return rejectWithValue(errorResponse);
    }
  }
);
