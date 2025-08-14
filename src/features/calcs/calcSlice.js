import { createSlice, current } from "@reduxjs/toolkit";

const initialState={
    result:null,
}


export const calcSlice = createSlice({
    name:"calc",
    initialState:initialState,
    reducers:{
      add :(current,action)=>{
    console.log("calling reducer for action named :(sum) ",action)
    const sum =Number(action.payload.firstNumber) + Number(action.payload.secondNumber)
    current.result=sum
      },
      Substract:(current,action)=>{
        console.log("calling reducer for action named :(Substractm) ")
         const sum =Number(action.payload.firstNumber) - Number(action.payload.secondNumber)
         current.result=sum
      },
      multiply:(current,action)=>{
            console.log("calling reducer for multiply")
            const sum =Number(action.payload.firstNumber) * Number(action.payload.secondNumber)
            current.result=sum
      },
      divide:(current,action)=>{
        console.log("calling reducer for divide")
        const sum =Number(action.payload.firstNumber) / Number(action.payload.secondNumber)
            current.result=sum

      }

    }
   
})


export const  {add,Substract,multiply,divide}=calcSlice.actions

export default calcSlice.reducer