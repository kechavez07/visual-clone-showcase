import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";

const TransactionList = () => {
  const transactions = [
    {
      type: "Received",
      amount: "0 ETH",
      status: "Pending",
      statusColor: "text-crypto-orange"
    },
    {
      type: "Exchange",
      amount: "20BTC",
      status: "Completed",
      statusColor: "text-crypto-green"
    },
    {
      type: "Exchange",
      amount: "2ETH",
      status: "Rejected",
      statusColor: "text-error-red"
    },
    {
      type: "Send",
      amount: "20BTC",
      status: "Completed",
      statusColor: "text-crypto-green"
    },
    {
      type: "Exchange",
      amount: "2BUSD",
      status: "Completed",
      statusColor: "text-crypto-green"
    },
    {
      type: "Exchange",
      amount: "2BTC",
      status: "Rejected",
      statusColor: "text-error-red"
    }
  ];

  return (
    <Card className="border-2 border-primary bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Transaction</h3>
        <Filter className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground" />
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-3 text-sm text-muted-foreground pb-3 border-b border-primary/20">
          <span>Amount</span>
          <span>Status</span>
          <span></span>
        </div>

        {transactions.map((transaction, index) => (
          <div key={index} className="grid grid-cols-3 py-3 border-b border-primary/10 last:border-b-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-foreground">{transaction.type}</p>
                <p className="text-xs text-muted-foreground">{transaction.amount}</p>
              </div>
            </div>
            <div>
              <span className={`text-sm font-medium ${transaction.statusColor}`}>
                {transaction.status}
              </span>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionList;