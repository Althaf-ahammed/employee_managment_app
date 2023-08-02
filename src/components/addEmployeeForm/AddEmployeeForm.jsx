import React, { useState } from 'react'
import HomeNavBar from '../navBar/HomeNavBar'
import { Box, Button, Card, CardActions, CardContent, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'

function AddEmployeeForm() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [joiningDate, setjoiningDate] = useState('')
    const [dob, setdob] = useState('')
    const [designation, setdesignation] = useState('')
    const [gender, setgender] = useState('')
    const [mobileNumber, setmobileNumber] = useState(null)
    const [landLine, setlandLine] = useState(null)
    const [email, setemail] = useState('')
    const [presentAddress, setpresentAddress] = useState('')
    const [permenentAddress, setpermenentAddress] = useState('')
    const [Status, setStatus] = useState('')
    const [profilePic, setprofilePic] = useState(null)
    const [resume, setresume] = useState(null)
    const [samepermenetAddresss, setsamepermenetAddresss] = useState(null)
    const dispatch = useDispatch()
  return (
    <div>
        <HomeNavBar/>
        <Card sx={{ mx:20,my:10, minWidth: 275 }}>
      <CardContent>
        <Box>
            <div className='loginHeader'>
            <h5>Add Employees</h5>
            </div>
            <Divider/>
            <form>
                <Stack spacing={{ xs: 1, sm: 18 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='name'>FirstName</label>
                <input id='name' type='text' onChange={(e)=>{setfirstName(e.target.value)}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 18 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Last Name</label>
                <input id='email' type='email'onChange={(e)=>{setlastName(e.target.value)}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 16 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Joining Date</label>
                <input type='date' onChange={(e)=>{setjoiningDate(e.target.value)}}></input>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 16 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Date Of Birth</label>
                <input type='date' onChange={(e)=>{setdob(e.target.value)}}></input>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 17 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Designation</label>
                <select name=''onChange={(e)=>{setdesignation(e.target.value)}}>
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="298">298</option>
                <option value="147">147</option>
                </select>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 20 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                
        <label id="demo-row-radio-buttons-group-label">Gender</label>
        <FormControlLabel value="female" control={<Radio />} label="Female" onClick={(e)=>{setgender(e.target.value)}} />
        <FormControlLabel value="male" control={<Radio />} label="Male" onClick={(e)=>{setgender(e.target.value)}} />
                </Stack>
                <Stack spacing={{ xs: 1, sm: 13 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Mobile Number</label>
                <input type='text' onChange={(e)=>{setmobileNumber(e.target.value)}}></input>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 19 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Land Line</label>
                <input type='text' onChange={(e)=>{setlandLine(e.target.value)}}></input>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 16 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Email Addres</label>
                <input type='text' onChange={(e)=>{setemail(e.target.value)}}></input>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 13 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Present Address</label>
                <textarea onChange={(e)=>{setpresentAddress(e.target.value)}}/>
                </Stack>
                <Box  sx={{mx:32}}>
                <input type='checkbox' value='true'></input> 
                <label>same as present address</label>
                </Box>
                <Stack spacing={{ xs: 1, sm: 10 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Permenent Address</label>
                <textarea onChange={(e)=>{setpermenentAddress(e.target.value)}}/>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 22 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Status</label>
                <select name=''onChange={(e)=>{setStatus(e.target.value)}}>
                <option value="">Select Status</option>
                <option value=" PERMENENT">Permenent</option>
                <option value="TEMPORARY">Temporary</option>
                </select>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 18 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for="imgUpload" class="form-label">Profile Pic</label>
                <input type="file" class="form-control" id="imageUpload" name="file" onChange={(e)=>{setprofilePic( e.target.files[0] )}}/>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 20 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for="imgUpload" class="form-label">Resume</label>
                <input type="file" class="form-control" id="imageUpload" name="file" onChange={(e)=>{setresume( e.target.files[0] )}}/>
                </Stack>
            </form>
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{mx:35}}>
        <Button >Submit</Button>
        <Button>Cancel</Button>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default AddEmployeeForm



