import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const MainChart = () => {
  const timeframes = ["Day", "Week", "Month", "Year"];
  
  const data = [
    { name: "Mar 2022", value: 45000 },
    { name: "Jun 2022", value: 30000 },
    { name: "Jul 2022", value: 35000 },
    { name: "Aug 2022", value: 25000 },
    { name: "Sep 2022", value: 40000 },
    { name: "Oct 2022", value: 50000 },
    { name: "Nov 2022", value: 38000 },
    { name: "Dec 2022", value: 45000 },
    { name: "Jan 2023", value: 35000 },
    { name: "Feb 2023", value: 42000 },
    { name: "Mar 2023", value: 35000 },
    { name: "Apr 2023", value: 30000 },
    { name: "May 2023", value: 40000 },
    { name: "Jun 2023", value: 45000 },
    { name: "Jul 2023", value: 42000 },
    { name: "Aug 2023", value: 35000 },
    { name: "Sep 2023", value: 38000 },
  ];

  return (
    <Card className="border-2 border-primary bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe}
              variant={timeframe === "Month" ? "default" : "ghost"}
              size="sm"
              className={timeframe === "Month" ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}
            >
              {timeframe}
            </Button>
          ))}
        </div>
        
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Sep 2023, 2 pm</p>
          <p className="text-xl font-bold text-foreground">$38,867</p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--crypto-blue))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--crypto-blue))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--crypto-blue))"
              strokeWidth={2}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MainChart;