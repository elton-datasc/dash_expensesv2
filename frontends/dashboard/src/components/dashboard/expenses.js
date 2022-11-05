// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from "@nivo/calendar";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const data = [
  {
    day: "2019-07-10",
    value: -344.67,
  },
  {
    day: "2019-10-22",
    value: -169.5,
  },
  {
    day: "2019-11-30",
    value: -257.18,
  },
  {
    day: "2019-12-02",
    value: -2.11,
  },
  {
    day: "2019-12-03",
    value: -0.13,
  },
  {
    day: "2019-12-05",
    value: -36.41,
  },
  {
    day: "2019-12-06",
    value: -49.37,
  },
  {
    day: "2019-12-08",
    value: -138.0,
  },
  {
    day: "2019-12-09",
    value: -58.1,
  },
  {
    day: "2019-12-10",
    value: 4417.36,
  },
  {
    day: "2019-12-11",
    value: 0.0,
  },
  {
    day: "2019-12-13",
    value: -107.68,
  },
  {
    day: "2019-12-14",
    value: -16.9,
  },
  {
    day: "2019-12-15",
    value: -142.78,
  },
  {
    day: "2019-12-16",
    value: -74.58,
  },
  {
    day: "2019-12-17",
    value: -525.92,
  },
  {
    day: "2019-12-19",
    value: -86.82,
  },
  {
    day: "2019-12-20",
    value: -19.48,
  },
  {
    day: "2019-12-21",
    value: -32.9,
  },
  {
    day: "2019-12-22",
    value: -120.0,
  },
  {
    day: "2019-12-23",
    value: -965.06,
  },
  {
    day: "2019-12-24",
    value: -3.0,
  },
  {
    day: "2019-12-25",
    value: -65.77,
  },
  {
    day: "2019-12-26",
    value: -199.5,
  },
  {
    day: "2019-12-27",
    value: -42.9,
  },
  {
    day: "2019-12-28",
    value: -107.36,
  },
  {
    day: "2019-12-29",
    value: -76.89,
  },
  {
    day: "2019-12-31",
    value: -75.92,
  },
  {
    day: "2020-01-01",
    value: -262.27,
  },
  {
    day: "2020-01-02",
    value: -47.0,
  },
  {
    day: "2020-01-03",
    value: -253.46,
  },
  {
    day: "2020-01-04",
    value: -172.46,
  },
  {
    day: "2020-01-06",
    value: -27.0,
  },
  {
    day: "2020-01-07",
    value: -19.38,
  },
  {
    day: "2020-01-08",
    value: -217.42,
  },
  {
    day: "2020-01-09",
    value: -4.6,
  },
  {
    day: "2020-01-10",
    value: 2439.83,
  },
  {
    day: "2020-01-11",
    value: -191.6,
  },
  {
    day: "2020-01-12",
    value: -214.71,
  },
  {
    day: "2020-01-13",
    value: -4.11,
  },
  {
    day: "2020-01-14",
    value: -355.19,
  },
  {
    day: "2020-01-15",
    value: -3233.04,
  },
  {
    day: "2020-01-16",
    value: -54.67,
  },
  {
    day: "2020-01-17",
    value: -72.0,
  },
  {
    day: "2020-01-18",
    value: -2497.32,
  },
  {
    day: "2020-01-19",
    value: -25.0,
  },
  {
    day: "2020-01-20",
    value: -240.92,
  },
  {
    day: "2020-01-21",
    value: -50.9,
  },
  {
    day: "2020-01-22",
    value: -72.94,
  },
  {
    day: "2020-01-23",
    value: -193.1,
  },
  {
    day: "2020-01-24",
    value: -50.0,
  },
  {
    day: "2020-01-25",
    value: -27.9,
  },
  {
    day: "2020-01-28",
    value: -19.0,
  },
  {
    day: "2020-01-29",
    value: -77.24,
  },
  {
    day: "2020-01-30",
    value: -209.7,
  },
  {
    day: "2020-01-31",
    value: -24.82,
  },
  {
    day: "2020-02-01",
    value: -404.84,
  },
  {
    day: "2020-02-02",
    value: -107.57,
  },
  {
    day: "2020-02-03",
    value: -26.9,
  },
  {
    day: "2020-02-04",
    value: -42.0,
  },
  {
    day: "2020-02-07",
    value: -82.75,
  },
  {
    day: "2020-02-08",
    value: -122.3,
  },
  {
    day: "2020-02-10",
    value: 9042.17,
  },
  {
    day: "2020-02-11",
    value: -27.5,
  },
  {
    day: "2020-02-13",
    value: -71.06,
  },
  {
    day: "2020-02-14",
    value: -172.21,
  },
  {
    day: "2020-02-15",
    value: -42.5,
  },
  {
    day: "2020-02-16",
    value: -355.38,
  },
  {
    day: "2020-02-17",
    value: -1880.0,
  },
  {
    day: "2020-02-18",
    value: -2333.0,
  },
  {
    day: "2020-02-20",
    value: -74.3,
  },
  {
    day: "2020-02-21",
    value: -239.53,
  },
  {
    day: "2020-02-22",
    value: -27.0,
  },
  {
    day: "2020-02-23",
    value: -90.03,
  },
  {
    day: "2020-02-24",
    value: -84.1,
  },
  {
    day: "2020-02-25",
    value: -112.5,
  },
  {
    day: "2020-10-08",
    value: -49.99,
  },
  {
    day: "2020-12-15",
    value: -905.34,
  },
  {
    day: "2020-12-27",
    value: -84.95,
  },
  {
    day: "2020-12-28",
    value: -356.97,
  },
  {
    day: "2021-01-27",
    value: -22.92,
  },
  {
    day: "2021-01-28",
    value: -31.0,
  },
  {
    day: "2021-01-29",
    value: -32.48,
  },
  {
    day: "2021-01-30",
    value: -207.03,
  },
  {
    day: "2021-01-31",
    value: -304.12,
  },
  {
    day: "2021-02-01",
    value: -36.0,
  },
  {
    day: "2021-02-02",
    value: -182.8,
  },
  {
    day: "2021-02-04",
    value: -76.87,
  },
  {
    day: "2021-02-05",
    value: -558.48,
  },
  {
    day: "2021-02-06",
    value: -86.07,
  },
  {
    day: "2021-02-07",
    value: -460.39,
  },
  {
    day: "2021-02-08",
    value: -41.59,
  },
  {
    day: "2021-02-09",
    value: -545.9,
  },
  {
    day: "2021-02-10",
    value: 4781.12,
  },
  {
    day: "2021-02-11",
    value: -74.08,
  },
  {
    day: "2021-02-12",
    value: -95.82,
  },
  {
    day: "2021-02-13",
    value: -70.53,
  },
  {
    day: "2021-02-14",
    value: -368.23,
  },
  {
    day: "2021-02-15",
    value: -247.78,
  },
  {
    day: "2021-02-16",
    value: -46.0,
  },
  {
    day: "2021-02-19",
    value: -394.18,
  },
  {
    day: "2021-02-20",
    value: -387.75,
  },
  {
    day: "2021-02-21",
    value: -221.0,
  },
  {
    day: "2021-02-22",
    value: -0.59,
  },
  {
    day: "2021-02-23",
    value: -3.0,
  },
  {
    day: "2021-02-25",
    value: -131.62,
  },
  {
    day: "2021-02-26",
    value: -206.99,
  },
  {
    day: "2021-02-27",
    value: -40.49,
  },
  {
    day: "2021-02-28",
    value: -118.38,
  },
  {
    day: "2021-03-01",
    value: -116.49,
  },
  {
    day: "2021-03-04",
    value: -86.4,
  },
  {
    day: "2021-03-05",
    value: -205.8,
  },
  {
    day: "2021-03-06",
    value: -33.4,
  },
  {
    day: "2021-03-07",
    value: -109.72,
  },
  {
    day: "2021-03-08",
    value: -126.46,
  },
  {
    day: "2021-03-09",
    value: -202.79,
  },
  {
    day: "2021-03-10",
    value: 4297.93,
  },
  {
    day: "2021-03-11",
    value: -45.68,
  },
  {
    day: "2021-03-13",
    value: -219.51,
  },
  {
    day: "2021-03-17",
    value: -62.97,
  },
  {
    day: "2021-03-18",
    value: -391.64,
  },
  {
    day: "2021-03-19",
    value: -340.12,
  },
  {
    day: "2021-03-20",
    value: -47.9,
  },
  {
    day: "2021-03-21",
    value: -122.9,
  },
  {
    day: "2021-03-23",
    value: -36.5,
  },
  {
    day: "2021-03-24",
    value: -80.79,
  },
  {
    day: "2021-03-25",
    value: -127.6,
  },
  {
    day: "2021-03-26",
    value: -97.25,
  },
  {
    day: "2021-03-27",
    value: -48.48,
  },
  {
    day: "2021-03-29",
    value: -57.87,
  },
  {
    day: "2021-03-30",
    value: -26.72,
  },
  {
    day: "2021-03-31",
    value: -33.46,
  },
  {
    day: "2021-04-01",
    value: -418.32,
  },
  {
    day: "2021-04-02",
    value: -64.52,
  },
  {
    day: "2021-04-03",
    value: -83.93,
  },
  {
    day: "2021-04-04",
    value: -63.05,
  },
  {
    day: "2021-04-05",
    value: -89.99,
  },
  {
    day: "2021-04-06",
    value: -91.1,
  },
  {
    day: "2021-04-07",
    value: -26.53,
  },
  {
    day: "2021-04-08",
    value: -132.69,
  },
  {
    day: "2021-04-09",
    value: -32.4,
  },
  {
    day: "2021-04-10",
    value: -588.8,
  },
  {
    day: "2021-04-11",
    value: -337.38,
  },
  {
    day: "2021-04-12",
    value: 4210.08,
  },
  {
    day: "2021-04-14",
    value: -554.24,
  },
  {
    day: "2021-04-17",
    value: -172.48,
  },
  {
    day: "2021-04-18",
    value: -17.59,
  },
  {
    day: "2021-04-19",
    value: -16.28,
  },
  {
    day: "2021-04-21",
    value: -42.28,
  },
  {
    day: "2021-04-23",
    value: -156.58,
  },
  {
    day: "2021-04-24",
    value: -151.48,
  },
  {
    day: "2021-04-25",
    value: -176.0,
  },
  {
    day: "2021-04-26",
    value: -24.99,
  },
  {
    day: "2021-04-27",
    value: -44.48,
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Expenses = (props) => {
  const theme = useTheme();

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
            from="2019-07-10"
            to="2021-04-27"
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
