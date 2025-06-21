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
import { Dictionary } from "@/dictionaries";

interface RSVPFormProps {
  dictionary: Dictionary;
}

export function RSVPForm({ dictionary }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  const formTexts = dictionary.rsvp.form;

  // Form schema with translated validation messages
  const formSchema = z.object({
    name: z.string().min(2, { message: formTexts.validation.nameRequired }),
    email: z.string().email({ message: formTexts.validation.emailInvalid }),
    attending: z.boolean(),
    plusOnes: z.number().min(0).max(5),
    plusOneNames: z.array(z.string().min(1, { message: formTexts.validation.nameMinLength })).optional(),
    dietaryRestrictions: z.string().optional(),
    notes: z.string().optional(),
  }).refine((data) => {
    // If attending and has plus ones, plus one names are required
    if (data.attending && data.plusOnes > 0) {
      return data.plusOneNames && data.plusOneNames.length === data.plusOnes;
    }
    return true;
  }, {
    message: formTexts.validation.plusOneNamesRequired,
    path: ["plusOneNames"],
  });

  type FormValues = z.infer<typeof formSchema>;

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      attending: true,
      plusOnes: 0,
      plusOneNames: [],
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
          plus_one_names: data.plusOneNames,
          dietary_restrictions: data.dietaryRestrictions,
          notes: data.notes,
        },
      ]);

      if (error) throw error;

      // Show success message
      setIsSuccess(true);
      toast.success(dictionary.rsvp.toasts.success);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast.error(dictionary.rsvp.toasts.error);
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
        <SuccessMessage name={form.getValues("name")} dictionary={dictionary} />
      ) : (
        <Card className={`border-none shadow-lg ${bgColor.lightTaupe} ${textColor.darkMaroon}`}>
          <CardHeader>
            <CardTitle className="text-xl">{formTexts.title}</CardTitle>
            <CardDescription>
              {formTexts.description}
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
                      <FormLabel>{formTexts.fields.name.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={formTexts.fields.name.placeholder} {...field} />
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
                      <FormLabel>{formTexts.fields.email.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={formTexts.fields.email.placeholder} type="email" {...field} />
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
                        <FormLabel>{formTexts.fields.attending.label}</FormLabel>
                        <FormDescription>{formTexts.fields.attending.description}</FormDescription>
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
                          <FormLabel>{formTexts.fields.plusOnes.label}</FormLabel>
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
                            {formTexts.fields.plusOnes.description}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("plusOnes") > 0 && (
                      <FormField
                        control={form.control}
                        name="plusOneNames"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{formTexts.fields.plusOneNames.label}</FormLabel>
                            <div className="space-y-3">
                              {Array.from({ length: form.watch("plusOnes") }, (_, index) => (
                                <FormControl key={index}>
                                  <Input
                                    placeholder={`${formTexts.fields.plusOneNames.placeholder} ${index + 1}`}
                                    value={field.value?.[index] || ""}
                                    onChange={(e) => {
                                      const currentNames = field.value || [];
                                      const newNames = [...currentNames];
                                      newNames[index] = e.target.value;
                                      field.onChange(newNames);
                                    }}
                                  />
                                </FormControl>
                              ))}
                            </div>
                            <FormDescription>
                              {formTexts.fields.plusOneNames.description}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{formTexts.fields.dietaryRestrictions.label}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={formTexts.fields.dietaryRestrictions.placeholder}
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
                      <FormLabel>{formTexts.fields.notes.label}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={formTexts.fields.notes.placeholder}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className={`w-full ${bgColor.sageGreen} font-bold`} disabled={isSubmitting}>
                  {isSubmitting ? formTexts.submitting : formTexts.submit}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}

function SuccessMessage({ name, dictionary }: { name: string; dictionary: Dictionary }) {
  const successTexts = dictionary.rsvp.success;
  
  return (
    <motion.div
      variants={slideUp()}
      initial="hidden"
      animate="visible"
      className={`text-center space-y-4 p-8 ${textColor.lightTaupe}`}
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
      <h3 className="text-2xl">{successTexts.title.replace('{name}', name)}</h3>
      <p>
        {successTexts.message}
      </p>
      <p>
        {successTexts.emailConfirmation}
      </p>
    </motion.div>
  );
}
