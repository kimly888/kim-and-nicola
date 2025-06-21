"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, slideUp } from "@/lib/animations";
import { supabase } from "@/lib/supabase/client";
import { bgColor, textColor } from "@/lib/theme";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  attending: z.boolean(),
  plusOnes: z.number().min(0).max(5),
  dietaryRestrictions: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      attending: true,
      plusOnes: 0,
      dietaryRestrictions: "",
      notes: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase.from("guests").insert([
        {
          name: data.name,
          email: data.email,
          attending: data.attending,
          plus_ones: data.plusOnes,
          dietary_restrictions: data.dietaryRestrictions,
          notes: data.notes,
        },
      ]);

      if (error) throw error;

      // Show success message
      setIsSuccess(true);
      toast.success("Thank you for your RSVP!");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast.error("There was an error submitting your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      {isSuccess ? (
        <SuccessMessage name={form.getValues("name")} />
      ) : (
        <Card className={`border-none shadow-lg ${bgColor.lightTaupe} ${textColor.darkMaroon}`}>
          <CardHeader>
            <CardTitle className="text-2xl">RSVP</CardTitle>
            <CardDescription>
              Please let us know if you can make it to our special day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attending"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I will be attending</FormLabel>
                        <FormDescription>Let us know if you can make it</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                {form.watch("attending") && (
                  <>
                    <FormField
                      control={form.control}
                      name="plusOnes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Plus Ones (Max 4)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              max={4}
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormDescription>
                          If your invite includes a plus one, lucky them. If not, we&apos;re saving a seat for one fabulous guest, you.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dietary Restrictions</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please let us know if you have any dietary restrictions"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Questions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional information you'd like to know"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className={`w-full ${bgColor.sageGreen} font-bold`} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Reserve Your Seat (and your champagne)"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}

function SuccessMessage({ name }: { name: string }) {
  return (
    <motion.div
      variants={slideUp()}
      initial="hidden"
      animate="visible"
      className="text-center space-y-4 p-8"
    >
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h3 className="text-2xl">Thank You, {name}!</h3>
      <p className="text-muted-foreground">
        Your RSVP has been successfully submitted. We look forward to celebrating with you!
      </p>
      <p className="text-sm text-muted-foreground">
        You&apos;ll receive a confirmation email shortly.
      </p>
    </motion.div>
  );
}
