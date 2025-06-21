"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Guest } from "@/lib/types";
import { supabase } from "@/lib/supabase/client";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { textColor } from "@/lib/theme";

export function AdminDashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    attending: 0,
    notAttending: 0,
    totalPlusOnes: 0,
  });

  useEffect(() => {
    async function fetchGuests() {
      try {
        const { data, error } = await supabase
          .from("guests")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data) {
          setGuests(data as Guest[]);

          // Calculate stats
          const attending = data.filter((guest) => guest.attending).length;
          const totalPlusOnes = data.reduce((sum, guest) => sum + (guest.plus_ones || 0), 0);

          setStats({
            total: data.length,
            attending,
            notAttending: data.length - attending,
            totalPlusOnes,
          });
        }
      } catch (error) {
        console.error("Error fetching guests:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGuests();
  }, []);

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
      className={`space-y-8 ${textColor.lightTaupe}`}
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total RSVPs"
          value={stats.total}
          description="Total number of responses"
          index={0}
        />
        <StatCard
          title="Attending"
          value={stats.attending}
          description="Guests who confirmed attendance"
          index={1}
        />
        <StatCard
          title="Not Attending"
          value={stats.notAttending}
          description="Guests who declined"
          index={2}
        />
        <StatCard
          title="Plus Ones"
          value={stats.totalPlusOnes}
          description="Additional guests"
          index={3}
        />
      </div>

      {/* Guest List */}
      <motion.div variants={fadeIn(0.3)} className="bg-card rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl">Guest List</h2>
          <p>All RSVP responses</p>
        </div>

        {isLoading ? (
          <div className="p-8 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading guest data...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Plus Ones
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Plus One Names
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Dietary Restrictions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Date Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {guests.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-4 text-center">
                      No RSVPs yet.
                    </td>
                  </tr>
                ) : (
                  guests.map((guest) => (
                    <tr key={guest.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">{guest.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{guest.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            guest.attending
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {guest.attending ? "Attending" : "Not Attending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{guest.plus_ones || 0}</td>
                      <td className="px-6 py-4">
                        {guest.plus_one_names && guest.plus_one_names.length > 0 
                          ? guest.plus_one_names.join(", ") 
                          : "None"}
                      </td>
                      <td className="px-6 py-4">{guest.dietary_restrictions || "None"}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(guest.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  description: string;
  index: number;
}

function StatCard({ title, value, description, index }: StatCardProps) {
  return (
    <motion.div variants={fadeIn(index * 0.1)}>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
