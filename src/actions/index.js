import {INCREASE, DECREASE,ADDTWO,SHOWVIEW} from './types';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});
export const handleAddTwo = () => ({type:ADDTWO});
export const handleShowView = () => ({type:SHOWVIEW});