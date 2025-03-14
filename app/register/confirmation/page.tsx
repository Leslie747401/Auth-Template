import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function RegistrationConfirmation() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[540px] text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-6">
            <Mail className="h-16 w-16 text-blue-500" />
          </div>
          <p className="text-gray-600 mb-4">
            We&#39;ve sent a confirmation link to your email address. Please check
            your inbox and click the link to activate your account.
          </p>
          <p className="text-sm text-gray-500">
            If you don&#39;t see the email, please check your spam folder.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
