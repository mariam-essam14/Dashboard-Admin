import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

export default function LineChart({isDashboard=false}) {
    const theme = useTheme()
    const data =[
        {
          "id": "france",
          "color": "hsl(101, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 112
            },
            {
              "x": "helicopter",
              "y": 61
            },
            {
              "x": "boat",
              "y": 199
            },
            {
              "x": "train",
              "y": 32
            },
            {
              "x": "subway",
              "y": 46
            },
            {
              "x": "bus",
              "y": 210
            },
            {
              "x": "car",
              "y": 19
            },
            {
              "x": "moto",
              "y": 133
            },
            {
              "x": "bicycle",
              "y": 253
            },
            {
              "x": "horse",
              "y": 129
            },
            {
              "x": "skateboard",
              "y": 242
            },
            {
              "x": "others",
              "y": 197
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(89, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 228
            },
            {
              "x": "helicopter",
              "y": 138
            },
            {
              "x": "boat",
              "y": 142
            },
            {
              "x": "train",
              "y": 239
            },
            {
              "x": "subway",
              "y": 124
            },
            {
              "x": "bus",
              "y": 239
            },
            {
              "x": "car",
              "y": 234
            },
            {
              "x": "moto",
              "y": 137
            },
            {
              "x": "bicycle",
              "y": 298
            },
            {
              "x": "horse",
              "y": 268
            },
            {
              "x": "skateboard",
              "y": 88
            },
            {
              "x": "others",
              "y": 25
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(58, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 236
            },
            {
              "x": "helicopter",
              "y": 281
            },
            {
              "x": "boat",
              "y": 109
            },
            {
              "x": "train",
              "y": 247
            },
            {
              "x": "subway",
              "y": 76
            },
            {
              "x": "bus",
              "y": 64
            },
            {
              "x": "car",
              "y": 177
            },
            {
              "x": "moto",
              "y": 150
            },
            {
              "x": "bicycle",
              "y": 291
            },
            {
              "x": "horse",
              "y": 75
            },
            {
              "x": "skateboard",
              "y": 251
            },
            {
              "x": "others",
              "y": 120
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(262, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 236
            },
            {
              "x": "helicopter",
              "y": 55
            },
            {
              "x": "boat",
              "y": 124
            },
            {
              "x": "train",
              "y": 33
            },
            {
              "x": "subway",
              "y": 276
            },
            {
              "x": "bus",
              "y": 92
            },
            {
              "x": "car",
              "y": 278
            },
            {
              "x": "moto",
              "y": 188
            },
            {
              "x": "bicycle",
              "y": 140
            },
            {
              "x": "horse",
              "y": 118
            },
            {
              "x": "skateboard",
              "y": 277
            },
            {
              "x": "others",
              "y": 159
            }
          ]
        }
      ]
  return (
    <Box sx={{height:isDashboard?"280px":"75vh"}}>
    <ResponsiveLine
     data={data}
     curve="catmullRom"
     theme={{
     
       "text": {
           "fontSize": 11,
           "fill": theme.palette.text.primary,
           "outlineWidth": 0,
           "outlineColor": "transparent"
       },
       "axis": {
           "domain": {
               "line": {
                   "stroke": theme.palette.divider,
                   "strokeWidth": 1
               }
           },
           "legend": {
               "text": {
                   "fontSize": 12,
                   "fill": theme.palette.text.primary,
                   "outlineWidth": 0,
                   "outlineColor": "transparent"
               }
           },
           "ticks": {
               "line": {
                   "stroke": theme.palette.divider,
                   "strokeWidth": 1
               },
               "text": {
                   "fontSize": 11,
                   "fill": theme.palette.text.secondary,
                   "outlineWidth": 0,
                   "outlineColor": "transparent"
               }
           }
       },
       "grid": {
           "line": {
               "stroke": theme.palette.divider,
               "strokeWidth": 0
           }
       },
       "legends": {
           "title": {
               "text": {
                   "fontSize": 11,
                   "fill": theme.palette.text.primary,
                   "outlineWidth": 0,
                   "outlineColor": "transparent"
               }
           },
           "text": {
               "fontSize": 11,
               "fill": theme.palette.text.primary,
               "outlineWidth": 0,
               "outlineColor": "transparent"
           },
           "ticks": {
               "line": {},
               "text": {
                   "fontSize": 10,
                   "fill": theme.palette.text.primary,
                   "outlineWidth": 0,
                   "outlineColor": "transparent"
               }
           }
       },
       "annotations": {
           "text": {
               "fontSize": 13,
               "fill": theme.palette.text.primary,
               "outlineWidth": 2,
               "outlineColor": "#ffffff",
               "outlineOpacity": 1
           },
           "link": {
               "stroke": "#000000",
               "strokeWidth": 1,
               "outlineWidth": 2,
               "outlineColor": "#ffffff",
               "outlineOpacity": 1
           },
           "outline": {
               "stroke": "#000000",
               "strokeWidth": 2,
               "outlineWidth": 2,
               "outlineColor": "#ffffff",
               "outlineOpacity": 1
           },
           "symbol": {
               "fill": "#000000",
               "outlineWidth": 2,
               "outlineColor": "#ffffff",
               "outlineOpacity": 1
           }
       },
       "tooltip": {
           "container": {
               "background":theme.palette.background.default,
               "fontSize": 12
           },
           "basic": {},
           "chip": {},
           "table": {},
           "tableCell": {},
           "tableCellValue": {}
       }
   }}
     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
     xScale={{ type: 'point' }}
     yScale={{
         type: 'linear',
         min: 'auto',
         max: 'auto',
         stacked: true,
         reverse: false
     }}
     yFormat=" >-.2f"
     axisTop={null}
     axisRight={null}
     axisBottom={{
         tickSize: 5,
         tickPadding: 5,
         tickRotation: 0,
         legend: isDashboard?null: 'Transportation',
         legendOffset: 36,
         legendPosition: 'middle'
     }}
     axisLeft={{
         tickSize: 5,
         tickPadding: 5,
         tickRotation: 0,
         legend: isDashboard?null: 'Count',
         legendOffset: -45,
         legendPosition: 'middle'
     }}
     pointSize={10}
     pointColor={{ theme: 'background' }}
     pointBorderWidth={2}
     pointBorderColor={{ from: 'serieColor' }}
     pointLabelYOffset={-12}
     useMesh={true}
     legends={[
         {
             anchor: 'bottom-right',
             direction: 'column',
             justify: false,
             translateX: 100,
             translateY: 0,
             itemsSpacing: 0,
             itemDirection: 'left-to-right',
             itemWidth: 80,
             itemHeight: 20,
             itemOpacity: 0.75,
             symbolSize: 12,
             symbolShape: 'circle',
             symbolBorderColor: 'rgba(0, 0, 0, .5)',
             effects: [
                 {
                     on: 'hover',
                     style: {
                         itemBackground: 'rgba(0, 0, 0, .03)',
                         itemOpacity: 1
                     }
                 }
             ]
         }
     ]}
 />

 </Box>
  )
}
