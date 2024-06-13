import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { RouterLink } from 'src/routes/components'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import NoAccountsIcon from '@mui/icons-material/NoAccounts'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import { usePathname } from './use-pathname'
import { alpha } from '@mui/material/styles'
import { Avatar, Typography } from '@mui/material'


export default function Navbar() {
  const pathname = usePathname()
  const navConfig = [
    {
      title: 'Charts',
      icon: <InsertChartIcon color="primary" />,
      path: '/'
    },
    {
      title: 'Emoji',
      icon: <AddReactionIcon color="secondary" />,
      path: '/Kitchen'
    },
    {
      title: 'User',
      icon: <AccountBoxIcon color="warning" />,
      path: '/products'
    },
    {
      title: 'ProductsPage',
      icon: <ProductionQuantityLimitsIcon color="success" />,
      path: '/ProductsPage'
    },
    {
      title: '404',
      icon: <NoAccountsIcon color="error" />,
      path: '/404'
    }
  ]
  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src="public/assets/avatar_9.jpg" alt="photoURL" sx={{ width: 50, height: 50 }} />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">用户1</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          666
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop: 5, paddingLeft: 2, paddingRight: 2 }}>
      {renderAccount}
      <List component="nav" aria-label="main mailbox folders">
        {navConfig.map((item, index) => (
          <ListItemButton key={item.title} component={RouterLink} href={item.path}
            sx={{
              minHeight: 44,
              borderRadius: 0.75,
              typography: 'body2',
              color: 'text.secondary',
              textTransform: 'capitalize',
              fontWeight: 'fontWeightMedium',
              ...(pathname === item.path && {
                color: 'primary.main',
                fontWeight: 'fontWeightSemiBold',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                },
              }),
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText >
              <span style={{ fontWeight: '600', fontSize: 14 }}>
                {item.title}
              </span>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
