import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createServerSupabaseClient();
    const body = await request.json();

    const { name, email, attending, plusOnes, dietaryRestrictions, notes } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("guests")
      .insert([
        {
          name,
          email,
          attending,
          plus_ones: plusOnes,
          dietary_restrictions: dietaryRestrictions,
          notes,
        },
      ])
      .select();

    if (error) {
      console.error("Error submitting RSVP:", error);
      return NextResponse.json({ error: "Failed to submit RSVP" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
