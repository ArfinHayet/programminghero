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
 import { useRouter } from 'next/router';
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import WorkIcon from '@mui/icons-material/Work';
 import EditIcon from '@mui/icons-material/Edit';
 import { Delete } from '@mui/icons-material';
 import ResponsiveAppBar from '@/component/appbar';
 import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
 import Link from 'next/link';

function Dashboard(){

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
      }
     
    const router = useRouter()
    const [age, setAge] = React.useState('10');
    const [value, setValue] = React.useState(0);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    const handleTab = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      
    
    function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }
        


    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    
    return(
       <Box>
        <List sx={{ width: '50%', maxWidth: 600,margin:'auto', bgcolor: 'background.paper' }}>
            <ResponsiveAppBar/>
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

                <Button variant="contained">
                    <Link href={"/routine/add"}>Add New</Link>
                </Button>
            </Box>
            


            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleTab} aria-label="basic tabs example">
                <Tab label="Study Schedule" {...a11yProps(0)} />
                <Tab label="Class Schedule" {...a11yProps(1)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box>
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
                    <EditIcon onClick={()=>{
                        router.push('/routine/edit')
                    }}/>
                    <Delete/>
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
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            




            
        </List>
       </Box>
    )
}

export default Dashboard;