import {SELECTED_SUMMARY} from './type'

export const summarySelected=(summarySelected)=>{
    return {
        type:SELECTED_SUMMARY,
        payload:summarySelected
    }
}