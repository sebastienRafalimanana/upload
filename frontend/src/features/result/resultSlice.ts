import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {IResult} from "./types"


const initialState:IResult={
    centerName:"",
    labelOption:"",
    candidateMatricule:"",
    candidateName:"",
    mention:"",
    status:false,
}

