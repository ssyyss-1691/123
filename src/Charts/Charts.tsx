import { Container, Grid, Typography } from '@mui/material'
import AppWidgetSummary from './AppWidgetSummary'
import LineBarChart from './LineBarChart'
import PieChart from './PieChart'
import RadarChart from './RadarChart'
import GraphChart from './GraphChart'

export default function Charts() {

  const tabs = [
    {
      title: 'Weekly Sales',
      total: 701,
      color: 'green',
      icon: <img alt="icon" src="/assets/glass/ic_glass_bag.png" />
    },
    {
      title: 'New Users',
      total: 630,
      color: 'info',
      icon: <img alt="icon" src="/assets/glass/ic_glass_users.png" />
    },
    {
      title: 'Orders',
      total: 630,
      color: 'warning',
      icon: <img alt="icon" src="/assets/glass/ic_glass_buy.png" />
    },
    {
      title: 'Reports',
      total: 739,
      color: 'error',
      icon: <img alt="icon" src="/assets/glass/ic_glass_message.png" />
    },
  ]
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi👋, Welcome back 🌈
      </Typography>
      <Grid container spacing={3} >
        {tabs.map((item, index) => {
          return (
            <Grid item md={3} key={item.title}>
              <AppWidgetSummary
                title={item.title}
                total={item.total}
                color={item.color}
                icon={item.icon}
              />
            </Grid>
          )
        })}
        <Grid item md={6}>
          <LineBarChart />
        </Grid>
        <Grid item md={6}>
          <PieChart />
        </Grid>
        <Grid item md={6}>
          <RadarChart />
        </Grid>
        <Grid item md={6}>
          <GraphChart />
        </Grid>
      </Grid>
    </Container>
  )
}
