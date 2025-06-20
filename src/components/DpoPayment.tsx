import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

interface DpoPaymentProps {
  amount: string;
  name: string;
  email: string;
  onSuccess: () => void;
}

const DpoPayment = ({ amount, name, email, onSuccess }: DpoPaymentProps) => {
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState<"paypal">("paypal");
  const [isMonthly, setIsMonthly] = useState(false);

  const parsedAmount = parseFloat(amount);
  const PLAN_ID = "P-XXXXXXXXXXXXXX"; // Replace with your real plan ID

  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-lg mb-2">Choose Payment Method</h4>

      {/* Monthly Toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="monthly"
          checked={isMonthly}
          onChange={() => setIsMonthly(!isMonthly)}
          className="w-4 h-4"
        />
        <label htmlFor="monthly" className="text-sm">Make this a <strong>monthly donation</strong></label>
      </div>

      {/* Payment Option */}
      <div className="p-4 border rounded-lg border-houg-primary bg-houg-primary/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CreditCard className="h-5 w-5" />
          <span>PayPal</span>
        </div>
        <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="h-6" />
      </div>

      {parsedAmount > 0 && (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID || "test" }}>
          <PayPalButtons
            style={{ layout: "vertical", label: "donate" }}
            createOrder={async () => {
              const res = await fetch("/.netlify/functions/create-paypal-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  amount,
                  monthly: isMonthly,
                  planId: isMonthly ? PLAN_ID : null,
                }),
              });

              const data = await res.json();

              if (isMonthly && data.subscriptionId) {
                return data.subscriptionId;
              } else if (data.id) {
                return data.id;
              }

              throw new Error("No PayPal ID returned");
            }}
            onApprove={async (data, actions) => {
              if (!isMonthly) {
                const details = await actions.order?.capture();
                onSuccess();
                toast({
                  title: "Thank you!",
                  description: `Donation completed by ${details?.payer?.name?.given_name}`,
                });
              } else {
                onSuccess();
                toast({
                  title: "Subscription Started",
                  description: "Thank you for supporting us monthly!",
                });
              }
            }}
            onError={(err) => {
              console.error(err);
              toast({
                title: "Payment Failed",
                description: "There was a problem processing your payment.",
                variant: "destructive",
              });
            }}
            fundingSource="paypal"
          />
        </PayPalScriptProvider>
      )}

      <div className="text-center text-xs text-gray-500 mt-4">
        <p>Secure PayPal Checkout</p>
      </div>
    </div>
  );
};

export default DpoPayment;
