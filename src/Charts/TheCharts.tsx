import { useEffect, useRef } from "react"
import * as echarts from "echarts"

export default function LineBarChart({ options }) {
  const chartRef = useRef(null)
  const chartInstance = useRef<any>(null)

  useEffect(() => {
    chartInstance.current = echarts.init(chartRef.current)
    chartInstance.current.setOption(options)
  }, [])


  //创建一个resize事件
  const echartsResize = () => {
    if (chartInstance.current) {
      chartInstance.current.resize()
    }
  }

  useEffect(() => {
    window.addEventListener('resize', echartsResize)
    // 页面卸载，销毁监听
    return () => {
      window.removeEventListener('resize', echartsResize)
    }
  })

  return (
    <div ref={chartRef} style={{ width: '100%', height: "400px" }}></div>
  )
}