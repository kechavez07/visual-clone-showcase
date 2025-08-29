import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="h-16 border-b border-primary/20 bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Welcome Back <span className="text-primary font-medium">Soroushzr1</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Searching things"
            className="pl-10 w-80 bg-input border-primary/20 focus:border-primary"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Soroushzr1</p>
            <p className="text-xs text-muted-foreground">Online-mode</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/lovable-uploads/f6c98059-e324-4229-bbe8-eaaa9e61484a.png" />
            <AvatarFallback className="bg-primary text-white">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;