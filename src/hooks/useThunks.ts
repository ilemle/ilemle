import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { rootThunks } from "../store"    //все thunk

export const useThunk = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootThunks, dispatch)
    }, [dispatch])
}

