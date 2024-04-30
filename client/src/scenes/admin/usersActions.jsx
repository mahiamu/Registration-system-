import { Check, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import { getUsers, updateStatus } from '../../actions/user';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useValue } from '../../context/ContextProvider';



const UsersActions= ({params,rowId,setRowId})=> {
   const {
    dispatch,
  } = useValue();
    const [loading,setLoading]=useState(false)
    const [success,setSuccess]=useState(false)
    const handleSubmit = async () => {
        setLoading(true);
        setTimeout(async() => {
            const{role, active, interview, _id} =params.row
            const result=await updateStatus({role, active,interview},_id,dispatch)
            console.log(result);
            if(result){
            setSuccess(true);
            setRowId(null);
            }
            getUsers(dispatch) 
            setLoading(false);            
        }, 1500);
    };
    useEffect(()=>{
        if(rowId === params.id && success) setSuccess(false);       
    },[rowId]);
    return(
        <Box
        sx={{
            m:1,
            position:'relative'
        }}>
            {success?(
                <Fab
                color='primary'
                sx={{
                    width:40,
                    height:40,
                    bgcolor: green[500],
                    '&:hover':{bgcolor: green[800]}
                }}>
                    <Check/>
                </Fab>
            ):( <Fab
                color='primary'
                sx={{
                    width:40,
                    height:40,                    
                }}
                disabled={params.id !== rowId || loading}
                onClick={handleSubmit}>
                    <Save/>
                </Fab>)}
                {loading &&(
                    <CircularProgress
                    size={52}
                    sx={{
                        color:green[500],
                        position:'absolute',
                        top:-6,
                        left:-6,
                        zIndex:-1,
                    }}/>
                )}
        </Box>
    )

}

export default UsersActions