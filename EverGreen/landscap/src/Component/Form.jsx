import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../Component/NavBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
export default function Form() {
    return (
        <div>
        <NavBar/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: { xs: 2, sm: 4 },
          px: 2,
        }}>
            
            <Box
          sx={{
            border: '2px solid #1B5E20',
            borderRadius: 2,
            width: { xs: '100%', sm: 500 },
            p: 3,
            m:10,
            backgroundColor: '#fff',
          }}
        >
             <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Mobile" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Email" />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={3}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1B5E20',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#2E7D32',
                  },
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
            </Box>
        </Box>
        </div>
    );
}