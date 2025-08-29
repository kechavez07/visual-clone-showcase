import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  data: Array<{ value: number }>;
  color: string;
  gradient: string;
}

const CryptoCard = ({ name, symbol, price, change, isPositive, data, color, gradient }: CryptoCardProps) => {
  return (
    <Card className={`p-4 border-2 border-primary bg-card relative overflow-hidden`}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: gradient }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: color }}
            >
              {symbol.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <p className="text-xs text-muted-foreground">{symbol}</p>
            </div>
          </div>
          
          <div className={`flex items-center gap-1 ${isPositive ? 'text-crypto-green' : 'text-error-red'}`}>
            {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-2xl font-bold text-foreground">{price}</p>
        </div>

        {/* Mini chart */}
        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default CryptoCard;