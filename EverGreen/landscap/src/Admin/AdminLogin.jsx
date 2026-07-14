import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import garden7 from "../pic/garden7.jpeg";

const MotionPaper = motion(Paper);


export default function AdminLogin(){

const navigate = useNavigate();


const [showPassword,setShowPassword]=useState(false);

const [loading,setLoading]=useState(false);

const [open,setOpen]=useState(false);

const [forgotOpen,setForgotOpen]=useState(false);

const [forgotEmail,setForgotEmail]=useState("");


const [alert,setAlert]=useState({
    severity:"success",
    message:""
});


const [formData,setFormData]=useState({
    email:"",
    password:""
});



const handleChange=(e)=>{

    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });

};



const handleLogin=async()=>{

try{


setLoading(true);


const res=await axios.post(

"http://localhost:8000/admin/login",

formData

);



localStorage.setItem(
"adminToken",
res.data.token
);


localStorage.setItem(
"admin",
JSON.stringify(res.data.admin)
);



setAlert({

severity:"success",
message:"Login Successful"

});


setOpen(true);



setTimeout(()=>{
navigate("/dashboard");

},1000);



}

catch(error){


setAlert({

severity:"error",
message:
error.response?.data?.msg ||
"Login Failed"

});


setOpen(true);


}

finally{

setLoading(false);

}

};
return (

<Box

sx={{

minHeight:"100vh",

background:
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url(${garden7})`,

backgroundSize:"cover",

backgroundPosition:"center",

display:"flex",

alignItems:"center",

justifyContent:"center",

p:2

}}

>


<MotionPaper

initial={{
opacity:0,
y:80,
scale:0.9
}}

animate={{
opacity:6,
y:0,
scale:1
}}

transition={{
duration:0.7
}}

sx={{

width:"100%",

maxWidth:450,

p:5,

borderRadius:"30px",

backdropFilter:"blur(18px)",

background:"rgba(237, 232, 232, 0.12)",

border:"1px solid rgba(246, 240, 240, 0.2)",

boxShadow:"0 25px 60px rgba(0,0,0,.35)",

color:"#fff"

}}

>


<Box textAlign="center" mb={4}>


<Box

sx={{

width:90,

height:90,

borderRadius:"50%",

bgcolor:"#43A047",

display:"flex",

alignItems:"center",

justifyContent:"center",

mx:"auto",

mb:2

}}

>

<AdminPanelSettingsIcon

sx={{fontSize:45}}

/>

</Box>



<Typography

variant="h4"

fontWeight="bold"

>

Admin Login

</Typography>


<Typography

sx={{opacity:.8,mt:1}}

>

Evergreen Landscape Dashboard

</Typography>


</Box>



<TextField

fullWidth

name="email"

label="Email Address"

value={formData.email}

onChange={handleChange}

sx={{

mb:3,

background:"#fff",

borderRadius:"15px"

}}


InputProps={{

startAdornment:(

<InputAdornment position="start">

<EmailIcon color="success"/>

</InputAdornment>

)

}}

/>



<TextField


fullWidth

name="password"

label="Password"

type={
showPassword ? "text" : "password"
}

value={formData.password}

onChange={handleChange}


sx={{

mb:3,

background:"#fff",

borderRadius:"15px"

}}


InputProps={{

startAdornment:(

<InputAdornment position="start">

<LockIcon color="success"/>

</InputAdornment>

),


endAdornment:(

<InputAdornment position="end">

<IconButton

onClick={()=>setShowPassword(!showPassword)}

>

{

showPassword ?

<VisibilityOff/>

:

<Visibility/>

}

</IconButton>


</InputAdornment>

)

}}

/>



<Typography

onClick={()=>setForgotOpen(true)}

sx={{

textAlign:"right",

cursor:"pointer",

mb:3,

fontSize:14,

"&:hover":{

color:"#81C784"

}

}}

>

Forgot Password?

</Typography>




<Button

fullWidth

variant="contained"

disabled={loading}

onClick={handleLogin}

sx={{

py:1.7,

borderRadius:"50px",

bgcolor:"#43A047",

"&:hover":{

bgcolor:"#2E7D32"

}

}}

>


{

loading ?

<CircularProgress

size={25}

sx={{color:"#fff"}}

/>

:

"Login To Dashboard"

}


</Button>
<Snackbar

open={open}

autoHideDuration={3000}

onClose={()=>setOpen(false)}

anchorOrigin={{

vertical:"top",

horizontal:"center"

}}

>


<Alert

severity={alert.severity}

onClose={()=>setOpen(false)}

>

{alert.message}

</Alert>


</Snackbar>




<Dialog

open={forgotOpen}

onClose={()=>setForgotOpen(false)}

>


<DialogTitle>

Forgot Password

</DialogTitle>



<DialogContent>


<TextField

fullWidth

label="Enter Email"

value={forgotEmail}

onChange={(e)=>
setForgotEmail(e.target.value)
}

sx={{mt:2}}

/>


</DialogContent>



<DialogActions>


<Button

onClick={()=>
setForgotOpen(false)
}

>

Cancel

</Button>



<Button

variant="contained"

onClick={async()=>{


try{


await axios.post(

"http://localhost:8000/admin/forgotpassword",

{

email:forgotEmail

}

);



setAlert({

severity:"success",

message:"Reset link sent to email"

});


setOpen(true);

setForgotOpen(false);



}

catch(error){


setAlert({

severity:"error",

message:
error.response?.data?.msg ||
"Email not found"

});


setOpen(true);


}



}}

>

Send Reset Link

</Button>



</DialogActions>



</Dialog>



</MotionPaper>


</Box>


);


}