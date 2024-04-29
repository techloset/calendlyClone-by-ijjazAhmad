"use client";
import { setMeetingFun } from "@/store/slices/meeting";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
const initialState = {
  schedulerEmail: "",
  schedulerName: "",
  description: "",
};

export const useSchedulerDetail = () => {
  const [confirm, setisConfirm] = useState(false);
  const [loading, setisLoading] = useState(false);
  const [state, setstate] = useState(initialState);
  const param = useSearchParams();
  const dispatch =useDispatch()
  const selectedTime = param.get("selectedTime");
  const selectedDate = param.get("selectedDate");
  const fullname = param.get("fullname");
  const id = param.get("id");
  const handelChange = (e: any) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async() => {
    setisLoading(true);
    const {schedulerEmail,schedulerName,description} = state
    const data = {schedulerEmail,schedulerName,description,selectedTime,selectedDate,fullname,id}
    try {
      const responce= await dispatch(setMeetingFun({schedulerEmail,schedulerName,description,selectedTime,selectedDate,fullname,id}) as any)
      if(responce.error){
        setisLoading(false);
        return 
      }
      else{
        setstate(initialState);    
        setisConfirm(true);
        setisLoading(false);
      }
    } catch (error) {
      
    }
  };
  return {
    confirm,
    loading,
    state,
    selectedTime,
    selectedDate,
    fullname,
    id,
    handelChange,
    handleSubmit,
  };
};
