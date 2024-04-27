import * as z from "zod";

export const availabilitySchema = z.object({
  startHour: z.string().min(1, "Please select a start hour"),
  endHour: z.string().min(1, "Please select an end hour"),
  userName: z.string().min(1, "user userName not found"),
  days: z
    .array(z.string())
    .min(1, { message: "Please select at least one day" }),
});
