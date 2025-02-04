import { createSlice } from "@reduxjs/toolkit";
import { getSchools } from "../thunks/schools-thunks";

interface IGrade {
  id: string;
  grade_no: string;
  name: string;
  name_ar: string;
  image: string;
  path: string;
  school_type_id: string;
}

interface ISchool {
  id: string;
  name: string;
  name_ar: string;
  image: string;
  path: string;
  grades: IGrade[];
}

interface SchoolsState {
  loading: boolean;
  error: string;
  schools: ISchool[] | null;
}

const initialSchoolsState: SchoolsState = {
  loading: false,
  error: "",
  schools: null,
};

const schoolsSlice = createSlice({
  name: "schools",
  initialState: initialSchoolsState,
  reducers: {},

  extraReducers: (builder) => {
    //* get teacher courses
    builder.addCase(getSchools.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getSchools.fulfilled, (state, action) => {
      state.loading = false;
      state.schools = action.payload;
      state.error = "";
    });
    builder.addCase(getSchools.rejected, (state) => {
      state.loading = false;
      state.error = "Error";
      state.schools = initialSchoolsState.schools;
    });
  },
});

export default schoolsSlice.reducer;
