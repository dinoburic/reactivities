import { CssBaseline, Container, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5001/api/activities')
      .then(response => setActivities(response.data));
  })

  return (
    <Box sx={{backgroundColor:'#eeee'}}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </Box>
  )
}

export default App
