// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from "@nivo/calendar";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const data = [
  {
    value: -49.99,
    day: "2020-10-08",
  },
  {
    value: -905.34,
    day: "2020-12-15",
  },
  {
    value: -84.95,
    day: "2020-12-27",
  },
  {
    value: -356.97,
    day: "2020-12-28",
  },
  {
    value: -22.92,
    day: "2021-01-27",
  },
  {
    value: -31.0,
    day: "2021-01-28",
  },
  {
    value: -32.48,
    day: "2021-01-29",
  },
  {
    value: -207.03,
    day: "2021-01-30",
  },
  {
    value: -304.12,
    day: "2021-01-31",
  },
  {
    value: -36.0,
    day: "2021-02-01",
  },
  {
    value: -182.8,
    day: "2021-02-02",
  },
  {
    value: -76.87,
    day: "2021-02-04",
  },
  {
    value: -558.48,
    day: "2021-02-05",
  },
  {
    value: -86.07,
    day: "2021-02-06",
  },
  {
    value: -460.39,
    day: "2021-02-07",
  },
  {
    value: -41.59,
    day: "2021-02-08",
  },
  {
    value: -545.9,
    day: "2021-02-09",
  },
  {
    value: 4781.12,
    day: "2021-02-10",
  },
  {
    value: -74.08,
    day: "2021-02-11",
  },
  {
    value: -95.82,
    day: "2021-02-12",
  },
  {
    value: -70.53,
    day: "2021-02-13",
  },
  {
    value: -368.23,
    day: "2021-02-14",
  },
  {
    value: -247.78,
    day: "2021-02-15",
  },
  {
    value: -46.0,
    day: "2021-02-16",
  },
  {
    value: -394.18,
    day: "2021-02-19",
  },
  {
    value: -395.5,
    day: "2021-02-20",
  },
  {
    value: -221.0,
    day: "2021-02-21",
  },
  {
    value: -0.59,
    day: "2021-02-22",
  },
  {
    value: -3.0,
    day: "2021-02-23",
  },
  {
    value: -131.62,
    day: "2021-02-25",
  },
  {
    value: -206.99,
    day: "2021-02-26",
  },
  {
    value: -40.49,
    day: "2021-02-27",
  },
  {
    value: -118.38,
    day: "2021-02-28",
  },
  {
    value: 6017.94,
    day: "2021-03-01",
  },
  {
    value: -848.47,
    day: "2021-03-02",
  },
  {
    value: -75.99,
    day: "2021-03-03",
  },
  {
    value: -86.4,
    day: "2021-03-04",
  },
  {
    value: -360.15,
    day: "2021-03-05",
  },
  {
    value: -33.4,
    day: "2021-03-06",
  },
  {
    value: -109.72,
    day: "2021-03-07",
  },
  {
    value: -126.46,
    day: "2021-03-08",
  },
  {
    value: -1282.87,
    day: "2021-03-09",
  },
  {
    value: 2859.1,
    day: "2021-03-10",
  },
  {
    value: -45.68,
    day: "2021-03-11",
  },
  {
    value: -339.41,
    day: "2021-03-12",
  },
  {
    value: -219.51,
    day: "2021-03-13",
  },
  {
    value: 93.4,
    day: "2021-03-16",
  },
  {
    value: -282.69,
    day: "2021-03-17",
  },
  {
    value: -399.83,
    day: "2021-03-18",
  },
  {
    value: -340.12,
    day: "2021-03-19",
  },
  {
    value: -47.9,
    day: "2021-03-20",
  },
  {
    value: -122.9,
    day: "2021-03-21",
  },
  {
    value: -36.5,
    day: "2021-03-23",
  },
  {
    value: -80.79,
    day: "2021-03-24",
  },
  {
    value: -137.6,
    day: "2021-03-25",
  },
  {
    value: -97.25,
    day: "2021-03-26",
  },
  {
    value: -48.48,
    day: "2021-03-27",
  },
  {
    value: -57.87,
    day: "2021-03-29",
  },
  {
    value: -26.72,
    day: "2021-03-30",
  },
  {
    value: -33.46,
    day: "2021-03-31",
  },
  {
    value: 11066.61,
    day: "2021-04-01",
  },
  {
    value: -64.52,
    day: "2021-04-02",
  },
  {
    value: -83.93,
    day: "2021-04-03",
  },
  {
    value: -63.05,
    day: "2021-04-04",
  },
  {
    value: -871.98,
    day: "2021-04-05",
  },
  {
    value: -91.1,
    day: "2021-04-06",
  },
  {
    value: -26.53,
    day: "2021-04-07",
  },
  {
    value: -132.69,
    day: "2021-04-08",
  },
  {
    value: -32.4,
    day: "2021-04-09",
  },
  {
    value: -588.8,
    day: "2021-04-10",
  },
  {
    value: -337.38,
    day: "2021-04-11",
  },
  {
    value: -1617.0,
    day: "2021-04-12",
  },
  {
    value: -554.24,
    day: "2021-04-14",
  },
  {
    value: -172.48,
    day: "2021-04-17",
  },
  {
    value: -24.81,
    day: "2021-04-18",
  },
  {
    value: -16.28,
    day: "2021-04-19",
  },
  {
    value: -42.28,
    day: "2021-04-21",
  },
  {
    value: -6.0,
    day: "2021-04-22",
  },
  {
    value: -156.58,
    day: "2021-04-23",
  },
  {
    value: -151.48,
    day: "2021-04-24",
  },
  {
    value: -176.0,
    day: "2021-04-25",
  },
  {
    value: -46.99,
    day: "2021-04-26",
  },
  {
    value: -44.48,
    day: "2021-04-27",
  },
  {
    value: 36.8,
    day: "2021-04-28",
  },
  {
    value: 7843.27,
    day: "2021-05-03",
  },
  {
    value: -96.0,
    day: "2021-05-04",
  },
  {
    value: -470.76,
    day: "2021-05-05",
  },
  {
    value: -1451.18,
    day: "2021-05-06",
  },
  {
    value: -10072.5,
    day: "2021-05-10",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Expenses = (props) => {
  const theme = useTheme();

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
      },
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Last 7 days
          </Button>
        }
        title="Latest Expenses"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <ResponsiveCalendar
            data={data}
            from="2020-10-08"
            to="2021-05-10"
            emptyColor="#eeeeee"
            colors={["#97e3d5", "#e8c1a0", "#f47560", "#61cdbb"]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#aaa"
            monthBorderWidth={1}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
              },
            ]}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};
