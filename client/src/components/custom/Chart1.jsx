import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";
import { Colors } from "@/constants/colors";

const chartConfig = {
  kesar: {
    label: "Kesar",
    color: Colors.customGray,
  },
  "ayurvedic herbs": {
    label: "Ayurvedic Herbs",
    color: Colors.customYellow,
  },
  others: {
    label: "Others",
    color: Colors.customIsabelline,
  },
};

const Chart1 = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/product-stats"
        );
        console.log("Full Response", res.data);
        setChartData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch chart data", error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <Card className="flex-1 rounded-xl bg-muted/50 md:min-hmin">
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Monthly Overview (Live)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="Kesar" fill="#ff8a00" radius={4} />
            <Bar dataKey="AyurvedicHerbs" fill="#c2b280" radius={4} />
            <Bar dataKey="Others" fill="#e0e0e0" radius={4} />
          </BarChart>
        </ChartContainer>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Live category trends <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Based on product creation by month
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default Chart1;
