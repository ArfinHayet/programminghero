import * as React from 'react';
import { 
    Box, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography, 
    Avatar,
    Divider,
    Button,MenuItem
 } from "@mui/material";
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import WorkIcon from '@mui/icons-material/Work';
 import ResponsiveAppBar from '@/component/appbar';
function Dashboard(){

    const [age, setAge] = React.useState('10');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    
    return(
       <Box>
        <List sx={{ width: '100%', maxWidth: 600,margin:'auto', bgcolor: 'background.paper' }}>
            <ResponsiveAppBar/>
            <br/>
            <br/>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',  gap: 3}}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Saturday</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <Button variant="contained">Add New</Button>
            </Box>
            




            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar>
                    <WorkIcon/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
                />
            </ListItem>
        </List>
       </Box>
    )
}

export default Dashboard;