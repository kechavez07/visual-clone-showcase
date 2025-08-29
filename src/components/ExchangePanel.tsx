import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExchangePanel = () => {
  const wallets = [
    { name: "Bitcoin", symbol: "BTC", percentage: "37%", change: "+4.5%" },
    { name: "Tether", symbol: "USDT", percentage: "23%", change: "-1.3%" },
    { name: "Ethereum", symbol: "ETH", percentage: "20%", change: "-1.9%" },
    { name: "Ripple", symbol: "XRP", percentage: "17%", change: "+8.6%" },
  ];

  return (
    <div className="space-y-6">
      {/* Exchange Card */}
      <Card className="border-2 border-primary bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Exchange</h3>
          <div className="flex gap-2">
            <Button size="sm" variant="default" className="bg-primary text-white">
              Buy
            </Button>
            <Button size="sm" variant="ghost" className="text-muted-foreground">
              Sell
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">From</label>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-6 bg-crypto-orange rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">₿</span>
              </div>
              <span className="text-sm font-medium">BTC</span>
              <span className="ml-auto text-lg font-bold">$5943</span>
            </div>
          </div>

          <div className="text-center">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto">
              <span className="text-muted-foreground">⇅</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">To</label>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-6 bg-crypto-green rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="text-sm font-medium">USDT</span>
              <span className="ml-auto text-lg font-bold">$10,039.00</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">≈ 1 BTC = $42,301.00</p>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
            Exchange Now
          </Button>
        </div>
      </Card>

      {/* Wallets Card */}
      <Card className="border-2 border-primary bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Wallets</h3>

        <div className="space-y-4">
          {wallets.map((wallet, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  wallet.symbol === 'BTC' ? 'bg-crypto-orange' :
                  wallet.symbol === 'USDT' ? 'bg-crypto-green' :
                  wallet.symbol === 'ETH' ? 'bg-crypto-purple' :
                  'bg-crypto-blue'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-foreground">{wallet.name}</p>
                  <p className="text-xs text-muted-foreground">{wallet.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{wallet.percentage}</p>
                <p className={`text-xs ${
                  wallet.change.startsWith('+') ? 'text-crypto-green' : 'text-error-red'
                }`}>
                  {wallet.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExchangePanel;