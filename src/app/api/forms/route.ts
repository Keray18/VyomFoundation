import { NextResponse } from "next/server";
import { z } from "zod";

const volunteerSchema = z.object({
  type: z.literal("volunteer"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  occupation: z.string().min(2, "Please share your current occupation or study program"),
  teachingSubjects: z.string().min(2, "Please specify subjects you can teach"),
  classesComfortable: z.array(z.string()).min(1, "Select at least one class group"),
  relevantExperience: z.string().optional(),
  weeklyAvailability: z.string().min(1, "Please select your weekly availability"),
  motivation: z.string().min(15, "Please share a short note on why you wish to teach with Vyom"),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
});

const internshipSchema = z.object({
  type: z.literal("internship"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  education: z.string().min(2, "Please state your university or current educational status"),
  position: z.string().min(2, "Please select the internship role"),
  skills: z.string().min(2, "Please list your relevant skills or software knowledge"),
  portfolioLink: z.string().optional(),
  motivation: z.string().min(20, "Please share why you are interested in this internship role"),
  consent: z.boolean().refine((val) => val === true, "You must consent to be contacted"),
});

const partnerSchema = z.object({
  type: z.literal("partner"),
  organizationName: z.string().min(2, "Organization or institution name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organizationType: z.string().min(2, "Please choose your organization category"),
  proposedCollaboration: z.string().min(10, "Please describe the nature of collaboration"),
  message: z.string().min(10, "Please provide any additional details or background"),
});

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(2, "Your name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject line is required"),
  category: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formType = body.type;

    if (!formType) {
      return NextResponse.json(
        { success: false, message: "Form type identifier is required." },
        { status: 400 }
      );
    }

    let parsedData;
    let prefix = "VYOM";

    if (formType === "volunteer") {
      prefix = "VYOM-VOL";
      const result = volunteerSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed. Please verify the entered fields.",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 422 }
        );
      }
      parsedData = result.data;
    } else if (formType === "internship") {
      prefix = "VYOM-INT";
      const result = internshipSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed. Please verify the entered fields.",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 422 }
        );
      }
      parsedData = result.data;
    } else if (formType === "partner") {
      prefix = "VYOM-PRT";
      const result = partnerSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed. Please verify the entered fields.",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 422 }
        );
      }
      parsedData = result.data;
    } else if (formType === "contact") {
      prefix = "VYOM-MSG";
      const result = contactSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Validation failed. Please verify the entered fields.",
            errors: result.error.flatten().fieldErrors,
          },
          { status: 422 }
        );
      }
      parsedData = result.data;
    } else {
      return NextResponse.json(
        { success: false, message: `Unsupported form type: ${formType}` },
        { status: 400 }
      );
    }

    // Generate unique verifiable reference ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `${prefix}-2026-${randomDigits}`;

    // Log the submission (server-side record for development/production)
    console.log(`[VYOM FOUNDATION SUBMISSION] [${referenceId}] Received:`, {
      type: formType,
      timestamp: new Date().toISOString(),
      summary: parsedData,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your submission has been received by Vyom Foundation. Our coordinator will review your details and connect with you shortly.",
      referenceId,
    });
  } catch (error) {
    console.error("Form submission handling error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
