import { Card, Grid } from '@mui/material'
import ProductCard from './product-card'
import { productsJson } from './productsJson'


export default function Products() {
  return (
    <Card sx={{ m: 5 }}>
      <Grid container spacing={3} sx={{ p: 5 }}>
        {productsJson.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Card >
  )
}
