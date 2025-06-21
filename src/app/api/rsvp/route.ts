import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createServerSupabaseClient();
    const body = await request.json();

    const { name, email, attending, plusOnes, plusOneNames, dietaryRestrictions, notes } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Validate plus one names if plusOnes > 0
    if (plusOnes > 0 && attending) {
      if (!plusOneNames || !Array.isArray(plusOneNames) || plusOneNames.length !== plusOnes) {
        return NextResponse.json({ 
          error: "Plus one names are required and must match the number of plus ones" 
        }, { status: 400 });
      }

      // Validate that all plus one names are provided and not empty
      const invalidNames = plusOneNames.some(name => !name || name.trim().length === 0);
      if (invalidNames) {
        return NextResponse.json({ 
          error: "All plus one names must be provided" 
        }, { status: 400 });
      }
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
          plus_one_names: plusOnes > 0 && attending ? plusOneNames : null,
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
