import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CryptoCard from "@/components/CryptoCard";
import MainChart from "@/components/MainChart";
import TransactionList from "@/components/TransactionList";
import ExchangePanel from "@/components/ExchangePanel";

const Index = () => {
  // Sample data for crypto cards
  const bitcoinData = Array.from({ length: 20 }, (_, i) => ({ value: 45000 + Math.random() * 5000 - 2500 }));
  const tetherData = Array.from({ length: 20 }, (_, i) => ({ value: 1 + Math.random() * 0.1 - 0.05 }));
  const ethereumData = Array.from({ length: 20 }, (_, i) => ({ value: 1600 + Math.random() * 200 - 100 }));

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Top crypto cards */}
            <div className="col-span-12 grid grid-cols-3 gap-6">
              <CryptoCard 
                name="Bitcoin"
                symbol="BTC"
                price="$36.28"
                change="+4.78%"
                isPositive={true}
                data={bitcoinData}
                color="hsl(var(--crypto-orange))"
                gradient="var(--gradient-orange)"
              />
              <CryptoCard 
                name="Tether"
                symbol="USDT"
                price="$1.02"
                change="-4.23%"
                isPositive={false}
                data={tetherData}
                color="hsl(var(--crypto-green))"
                gradient="var(--gradient-green)"
              />
              <CryptoCard 
                name="Ethereum"
                symbol="ETH"
                price="$1,633.05"
                change="+3.73%"
                isPositive={true}
                data={ethereumData}
                color="hsl(var(--crypto-purple))"
                gradient="var(--gradient-purple)"
              />
            </div>

            {/* Main content area */}
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {/* Transaction list */}
              <div className="col-span-1">
                <TransactionList />
              </div>
              
              {/* Main chart */}
              <div className="col-span-1">
                <MainChart />
              </div>
            </div>

            {/* Exchange panel */}
            <div className="col-span-4">
              <ExchangePanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;