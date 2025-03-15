import {
  LocateFixed,
  Mail,
  PhoneIncoming,
  GitFork,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Shall we talk ?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Are you interested in working together, or do you have any
            questions?
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-orange-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p className="mb-8 opacity-90">
                  Fill out the form, and I will get in touch with you as soon as
                  possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/20">
                      <LocateFixed size={20} />
                    </div>
                    <span>Aara. Sagwara Rajasthan 314025</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/20">
                      <Mail size={20} />
                    </div>
                    <span>bhavinpathak29@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/20">
                      <PhoneIncoming size={20} />
                    </div>
                    <span>+91 7690008729</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/20">
                      <GitFork size={20} />
                    </div>
                    <span>github.com/Bhavin-Pathak/</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/20">
                      <Linkedin size={20} />
                    </div>
                    <span>linkedin.com/in/bhavin-pathak</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-600 hover:to-orange-600 text-white border-0">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
