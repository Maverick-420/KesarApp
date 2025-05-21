import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_f1ax0ph", // Replace with your EmailJS Service ID
        "template_7ve5acd", // Replace with your EmailJS Template ID
        formRef.current,
        "cfZLlTrTHHV1cjAu9" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center items-center px-4 py-6">
      <Card className="w-full max-w-2xl shadow-xl border border-orange-300 dark:border-orange-700">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-orange-600">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions or need support? We're here to help!
          </p>

          {/* Static Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-orange-600" />
              <span>support@kashmirkesar.com</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-orange-600" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 pt-4">
            <Input placeholder="Your Name" name="user_name" required />
            <Input
              placeholder="Your Email"
              name="user_email"
              type="email"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              required
            />
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {sent && (
            <p className="text-green-600 text-center font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
